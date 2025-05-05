/// <reference types="@figma/plugin-typings" />
import {
  extractTags,
  renameFrameKeepTags,
  toKebabCase,
  toPascalCase,
  updateFrameNameWithTags,
} from "../utils";

// 导入消息类型常量
import { MESSAGE_TYPES } from "../ui/hooks/usePluginMessages";

figma.showUI(__html__, { width: 400, height: 720 });

interface IconMetadata {
  name: string;
  category: string;
  width: number;
  height: number;
  tags: string[];
  filename: string;
}

// 发送当前选择到UI当它加载时
function updateSelectionInfo() {
  const nodes = figma.currentPage.selection;
  const selectionInfo = nodes.map((node) => {
    return {
      id: node.id,
      name: node.name,
      type: node.type,
    };
  });

  figma.ui.postMessage({
    type: "selection-updated",
    nodes: selectionInfo,
  });
}

// 处理来自UI的消息
figma.ui.onmessage = async (msg) => {
  if (msg.type === "export-svg") {
    const nodes = figma.currentPage.selection;
    const result: { svg: string; metadata: IconMetadata; nodeId: string }[] =
      [];

    // 如果没有选择任何框架，显示通知并发送空结果
    if (nodes.length === 0) {
      figma.notify("Please select at least one frame to export");
      // 发送空的结果数组，以便UI清除之前的结果并显示no-results
      figma.ui.postMessage({
        type: "export-result",
        data: [],
      });
      return;
    }

    // 处理每个选中的节点
    for (const node of nodes) {
      // 只处理框架
      if (node.type !== "FRAME") {
        figma.notify(`Skipping ${node.name}: Only frames can be exported`);
        continue;
      }

      try {
        // 导出节点为SVG
        const svgData = await node.exportAsync({
          format: "SVG",
          svgOutlineText: true,
          svgIdAttribute: true,
          svgSimplifyStroke: true,
          useAbsoluteBounds: true,
          colorProfile: "SRGB",
        });

        const svgString = String.fromCharCode.apply(
          null,
          new Uint8Array(svgData) as unknown as number[]
        );

        // 获取框架的属性以用于元数据
        const frameName = node.name;

        // 提取标签和清理名称
        const { cleanName, tags } = extractTags(frameName);

        // 将PascalCase用于'name'字段
        const pascalCaseName = toPascalCase(cleanName);

        // 使用kebab-case用于文件名
        const kebabCaseName = toKebabCase(cleanName);

        // 为这个图标创建元数据
        const metadata: IconMetadata = {
          name: pascalCaseName,
          filename: `${kebabCaseName}.svg`,
          category: figma.currentPage.name, // 使用页面名称作为类别
          width: Math.round(node.width),
          height: Math.round(node.height),
          tags: tags,
        };

        result.push({
          svg: svgString,
          metadata: metadata,
          nodeId: node.id,
        });
      } catch (error) {
        figma.notify(`Error exporting ${node.name}: ${error}`);
      }
    }

    // 将结果发送回UI
    figma.ui.postMessage({
      type: "export-result",
      data: result,
    });
  } else if (msg.type === "update-tags") {
    const { nodeId, tags, operation } = msg;

    try {
      // 通过ID查找节点 (使用异步方法)
      const node = await figma.getNodeByIdAsync(nodeId);

      if (node && "name" in node) {
        let updatedName = "";

        // 根据操作类型处理标签
        if (operation === "add") {
          // 添加单个标签
          const { cleanName, tags: existingTags } = extractTags(node.name);
          // 检查标签是否已存在
          if (!existingTags.includes(tags)) {
            existingTags.push(tags);
          }
          // 创建新的节点名称，包含所有标签
          const newTags = existingTags.join(",");
          updatedName = updateFrameNameWithTags(cleanName, newTags);
        } else if (operation === "remove") {
          // 删除单个标签
          const { cleanName, tags: existingTags } = extractTags(node.name);
          // 移除标签
          const tagIndex = existingTags.indexOf(tags);
          if (tagIndex !== -1) {
            existingTags.splice(tagIndex, 1);
          }
          // 创建新的节点名称，包含所有剩余标签
          const newTags = existingTags.join(",");
          updatedName = updateFrameNameWithTags(cleanName, newTags);
        } else {
          // 常规的标签更新
          updatedName = updateFrameNameWithTags(node.name, tags);
        }

        // 更新节点名称
        node.name = updatedName;

        figma.ui.postMessage({
          type: "tags-updated",
          nodeId: nodeId,
          updatedName: node.name,
        });

        // 对于批量操作，不显示通知以避免太多弹出
        if (!operation) {
          figma.notify("Tags updated successfully!");
        }
      } else {
        figma.notify("Error: Node not found or not editable!");
      }
    } catch (error) {
      console.error("Error updating tags:", error);
      figma.notify("Error updating tags: " + (error as Error).message);
    }
  } else if (msg.type === "rename-frame") {
    const { nodeId, newName } = msg;

    try {
      // 通过ID查找节点 (使用异步方法)
      const node = await figma.getNodeByIdAsync(nodeId);

      if (node && "name" in node) {
        // 重命名框架但保持现有标签
        const updatedName = renameFrameKeepTags(node.name, newName);
        node.name = updatedName;

        figma.ui.postMessage({
          type: "rename-updated",
          nodeId: nodeId,
          updatedName: node.name,
        });

        figma.notify("Frame renamed successfully!");
      } else {
        figma.notify("Error: Node not found or not editable!");
      }
    } catch (error) {
      console.error("Error renaming frame:", error);
      figma.notify("Error renaming frame: " + (error as Error).message);
    }
  } else if (msg.type === MESSAGE_TYPES.BATCH_ADD_TAG) {
    const { nodeIds, tag } = msg;

    if (!tag || !nodeIds || !nodeIds.length) {
      figma.notify("Invalid request: missing tag or nodeIds");
      return;
    }

    try {
      // 存储已更新的节点信息
      const updatedNodes: { id: string; name: string }[] = [];

      // 解析多个标签，如果有逗号则分割
      const tagsToAdd = tag.includes(",")
        ? tag
            .split(",")
            .map((t: string) => t.trim())
            .filter((t: string) => t.length > 0)
        : [tag];

      console.log("需要添加的标签:", tagsToAdd);

      // 一个一个处理节点，但是不用Promise.all来并行处理
      for (let i = 0; i < nodeIds.length; i++) {
        const nodeId = nodeIds[i];

        // 获取节点
        const node = await figma.getNodeByIdAsync(nodeId);

        if (node && "name" in node) {
          // 获取当前节点的名称和标签
          const { cleanName, tags: currentTags } = extractTags(node.name);

          // 复制当前标签数组，以便我们可以修改它
          const newTags = [...currentTags];

          // 添加所有新标签，确保不重复
          let changed = false;
          for (const newTag of tagsToAdd) {
            if (newTag && !newTags.includes(newTag)) {
              newTags.push(newTag);
              changed = true;
            }
          }

          // 只有当有新标签添加时才更新节点名称
          if (changed) {
            // 创建新名称并更新节点
            const updatedName = updateFrameNameWithTags(
              cleanName,
              newTags.join(",")
            );
            node.name = updatedName;
            console.log(
              `节点 ${i + 1}/${nodeIds.length} (${nodeId}) 更新后名称: ${updatedName}`
            );
          } else {
            console.log(
              `节点 ${i + 1}/${nodeIds.length} (${nodeId}) 没有变化，跳过`
            );
          }

          // 记录已更新的节点
          updatedNodes.push({ id: nodeId, name: node.name });
        }
      }

      // 发送批量更新结果回 UI
      figma.ui.postMessage({
        type: MESSAGE_TYPES.BATCH_TAGS_UPDATED,
        updatedNodes,
      });

      figma.notify(
        `已添加 ${tagsToAdd.length} 个标签到 ${updatedNodes.length} 个图标`
      );
    } catch (error) {
      console.error("批量添加标签错误:", error);
      figma.notify(`添加标签出错: ${(error as Error).message}`);
    }
  } else if (msg.type === MESSAGE_TYPES.BATCH_REMOVE_TAG) {
    const { nodeIds, tag } = msg;

    if (!tag || !nodeIds || !nodeIds.length) {
      figma.notify("Invalid request: missing tag or nodeIds");
      return;
    }

    try {
      // 存储已更新的节点信息
      const updatedNodes: { id: string; name: string }[] = [];
      let totalRemoved = 0;

      // 解析多个标签，如果有逗号则分割
      const tagsToRemove = tag.includes(",")
        ? tag
            .split(",")
            .map((t: string) => t.trim())
            .filter((t: string) => t.length > 0)
        : [tag];

      console.log("需要移除的标签:", tagsToRemove);

      // 一个一个处理节点，但是不用Promise.all来并行处理
      for (let i = 0; i < nodeIds.length; i++) {
        const nodeId = nodeIds[i];

        // 获取节点
        const node = await figma.getNodeByIdAsync(nodeId);

        if (node && "name" in node) {
          // 获取当前节点的名称和标签
          const { cleanName, tags: currentTags } = extractTags(node.name);

          // 复制当前标签数组，以便我们可以修改它
          const newTags = [...currentTags];

          // 移除所有指定标签
          let removed = 0;
          for (const tagToRemove of tagsToRemove) {
            if (tagToRemove) {
              const index = newTags.indexOf(tagToRemove);
              if (index !== -1) {
                newTags.splice(index, 1);
                removed++;
              }
            }
          }

          totalRemoved += removed;

          // 只有当有标签被移除时才更新节点名称
          if (removed > 0) {
            // 创建新名称并更新节点
            const updatedName = updateFrameNameWithTags(
              cleanName,
              newTags.join(",")
            );
            node.name = updatedName;
            console.log(
              `节点 ${i + 1}/${nodeIds.length} (${nodeId}) 移除了 ${removed} 个标签，更新后名称: ${updatedName}`
            );
          } else {
            console.log(
              `节点 ${i + 1}/${nodeIds.length} (${nodeId}) 没有标签被移除，跳过`
            );
          }

          // 记录已更新的节点
          updatedNodes.push({ id: nodeId, name: node.name });
        }
      }

      // 发送批量更新结果回 UI
      figma.ui.postMessage({
        type: MESSAGE_TYPES.BATCH_TAGS_UPDATED,
        updatedNodes,
      });

      figma.notify(
        `从 ${updatedNodes.length} 个图标中移除了 ${totalRemoved} 个标签`
      );
    } catch (error) {
      console.error("批量移除标签错误:", error);
      figma.notify(`移除标签出错: ${(error as Error).message}`);
    }
  } else if (msg.type === MESSAGE_TYPES.GET_SELECTION) {
    updateSelectionInfo();
  } else if (msg.type === MESSAGE_TYPES.CLOSE) {
    figma.closePlugin();
  }
};

// 当选择变更时更新选择信息
figma.on("selectionchange", () => {
  updateSelectionInfo();
});
