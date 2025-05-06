# @choiceform/icons-js

JavaScript library for SVG icons.

## 特性

- 纯 JavaScript 实现，无框架依赖
- 支持多种使用方式：CDN、ES 模块
- 完整保留 SVG 属性，包括 `viewBox`、`stroke-linecap` 等
- 支持通过配置文件自定义类名

## 安装

```bash
# npm
npm install @choiceform/icons-js

# yarn
yarn add @choiceform/icons-js

# pnpm
pnpm add @choiceform/icons-js
```

## 使用

### 使用 CDN

```html
<!DOCTYPE html>
<body>
  <!-- 使用 data-icon 属性指定图标 -->
  <i data-icon="workspace"></i>
  <i data-icon="file-upload"></i>
  <i data-icon="settings"></i>

  <!-- 引入 UMD 版本 -->
  <script src="https://unpkg.com/@choiceform/icons-js@latest/dist/umd/icons-js.js"></script>
  <script>
    // 初始化所有图标
    iconsJs.createIcons({
      icons: iconsJs.default,
    });
  </script>
</body>
```

### 使用 ES 模块

```js
import {
  createIcons,
  Workspace,
  FileUpload,
  Settings,
} from "@choiceform/icons-js";

// 只导入需要的图标（推荐方式，减小打包体积）
createIcons({
  icons: {
    Workspace,
    FileUpload,
    Settings,
  },
});
```

## 高级用法

### 自定义属性名

默认情况下，图标库使用 `data-icon` 属性查找要替换的元素。你可以自定义这个属性名：

```js
import { createIcons, Workspace, FileUpload } from "@choiceform/icons-js";

createIcons({
  nameAttr: "data-cf-icon", // 使用 data-cf-icon 代替 data-icon
  icons: {
    Workspace,
    FileUpload,
  },
});
```

然后在 HTML 中这样使用：

```html
<i data-cf-icon="workspace"></i>
```

### 自定义属性

你可以为所有图标设置默认属性：

```js
import { createIcons, Workspace, FileUpload } from "@choiceform/icons-js";

createIcons({
  attrs: {
    class: ["my-icon-class", "icon"], // 类名会被合并
    width: "20",
    height: "20",
    fill: "#333",
  },
  icons: {
    Workspace,
    FileUpload,
  },
});
```

### 直接创建元素

你可以直接创建图标元素，而不是通过替换占位符：

```js
import { createElement, Workspace } from "@choiceform/icons-js";

// 创建 SVG 元素
const workspaceIcon = createElement(Workspace); // 返回 HTMLElement (svg)

// 添加到 DOM
const container = document.getElementById("icon-container");
container.appendChild(workspaceIcon);
```

#### 添加自定义属性

```js
import { createElement, FileUpload } from "@choiceform/icons-js";

// 创建带自定义属性的图标
const fileUploadIcon = createElement(FileUpload, {
  class: "custom-icon",
  width: "32",
  height: "32",
  fill: "#1976d2",
});

// 添加到 DOM
document.body.appendChild(fileUploadIcon);
```

## 元数据

你可以访问所有图标的元数据：

```js
import { iconMetadata } from "@choiceform/icons-js";

// iconMetadata 是一个包含图标信息的数组
console.log(iconMetadata);
```

## 配置

通过项目根目录下的 `icon-config.json` 文件，你可以定制图标的全局设置：

```json
{
  "iconClassName": "choiceform-icon"
}
```

目前支持的配置：

- `iconClassName`: 图标的默认 CSS 类名

## 开发

```bash
# 生成图标
npm run generate

# 开发模式（监视文件变化）
npm run dev

# 构建
npm run build
```
