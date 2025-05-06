import fs from "fs-extra";
import path from "path";
import camelcase from "camelcase";
import { IconMetadata } from "./types.js";

/**
 * 确保组件名是有效的 PascalCase 格式
 * @param name 原名称
 * @returns PascalCase 格式的名称
 */
export function validateComponentName(name: string): string {
  // 检查是否已经是 PascalCase
  if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
    // 如果不是，使用 camelcase 进行转换
    return camelcase(name, { pascalCase: true });
  }
  return name;
}

/**
 * 获取 kebab-case 格式的名称
 * @param name 原名称
 * @returns kebab-case 格式的名称
 */
export function getKebabCaseName(name: string): string {
  const kebab = name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
  return kebab;
}

/**
 * 从 SVG 文件获取图标元数据
 * @param svgFile SVG 文件路径
 * @returns 图标元数据
 */
export async function getIconMetadata(svgFile: string): Promise<IconMetadata> {
  const jsonFile = svgFile.replace(/\.svg$/, ".json");

  try {
    // 检查对应的 JSON 文件是否存在
    if (await fs.pathExists(jsonFile)) {
      const jsonData = await fs.readJson(jsonFile);

      // 确保组件名是有效的 PascalCase
      const componentName = validateComponentName(jsonData.name);

      return {
        name: componentName,
        filename: jsonData.filename,
        category: jsonData.category,
        tags: jsonData.tags || [],
        width: jsonData.width,
        height: jsonData.height,
      };
    } else {
      console.warn(`⚠️ No JSON metadata found for ${path.basename(svgFile)}`);
      // 如果找不到 JSON 文件，退回到从文件名生成
      const fileName = path.basename(svgFile, ".svg");
      const componentName = validateComponentName(fileName);
      return {
        name: componentName,
        filename: fileName + ".svg",
        category: "unknown",
        tags: [],
        width: null,
        height: null,
      };
    }
  } catch (error) {
    console.error(
      `❌ Error reading metadata for ${path.basename(svgFile)}:`,
      error
    );
    const fileName = path.basename(svgFile, ".svg");
    const componentName = validateComponentName(fileName);
    return {
      name: componentName,
      filename: fileName + ".svg",
      category: "unknown",
      tags: [],
      width: null,
      height: null,
    };
  }
}
