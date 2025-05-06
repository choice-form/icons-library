// 从库中导入特定的图标和createElement方法
// 注意：这里使用了相对路径导入，实际项目中应该使用包名导入
import {
  createElement,
  Workspace,
  FileUpload,
  Settings,
} from "../../packages/icons-js/dist/index.js";

// 要展示的图标列表，每个图标都有名称和组件
const icons = [
  { name: "Workspace", component: Workspace },
  { name: "FileUpload", component: FileUpload },
  { name: "Settings", component: Settings },
];

// 获取容器元素
const container = document.getElementById("icon-container");

// 方法1：使用 createElement 创建图标元素并添加到DOM
icons.forEach((icon) => {
  // 创建一个包装容器
  const box = document.createElement("div");
  box.className = "icon-box";

  // 使用 createElement 创建 SVG 图标元素
  const svgElement = createElement(icon.component, {
    // 可以在这里传递自定义属性
    width: "24",
    height: "24",
    fill: "none",
  });

  // 添加图标名称标签
  const nameElement = document.createElement("span");
  nameElement.className = "icon-name";
  nameElement.textContent = icon.name;

  // 将图标和名称添加到包装容器
  box.appendChild(svgElement);
  box.appendChild(nameElement);

  // 将包装容器添加到主容器
  container.appendChild(box);
});

// 方法2：也可以直接使用图标的 toString 方法获取 SVG 字符串
const svgStringsContainer = document.createElement("div");
svgStringsContainer.className = "icon-box";
svgStringsContainer.innerHTML = `
  <div>${Workspace.toString()}</div>
  <span class="icon-name">Workspace.toString()</span>
`;
container.appendChild(svgStringsContainer);

// 输出图标到控制台，方便调试
console.log("可用图标:", { Workspace, FileUpload, Settings });
