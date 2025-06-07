# Vite 插件使用示例

这个示例展示如何在 Vite 项目中使用 `@choiceform/icons-sprite` 插件。

## 📁 项目结构

```
your-vite-project/
├── src/
│   ├── icons/          # SVG 图标目录
│   │   ├── search.svg
│   │   ├── home.svg
│   │   └── user.svg
│   ├── types/          # TypeScript 类型目录
│   │   └── icons.d.ts  # 自动生成的类型文件
│   └── main.ts
├── public/
│   └── icons.svg       # 自动生成的 sprite 文件
├── vite.config.ts
└── package.json
```

## 🔧 安装和配置

### 1. 安装依赖

```bash
npm install @choiceform/icons-sprite --save-dev
```

### 2. 配置 Vite

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { viteIconsSprite } from "@choiceform/icons-sprite/vite";

export default defineConfig({
  plugins: [
    viteIconsSprite({
      // 图标输入目录
      input: "./src/icons",

      // 输出 sprite 文件路径
      output: "./public/icons.svg",

      // 图标 ID 前缀
      prefix: "icon-",

      // 优化 SVG（默认启用）
      optimize: true,

      // 生成 TypeScript 类型定义
      generateTypes: true,
      typesOutput: "./src/types/icons.d.ts",

      // 开发模式配置
      dev: true, // 开发时启用
      build: true, // 构建时启用
      watch: true, // 监听文件变化
    }),
  ],
});
```

## 📝 在代码中使用

### 1. TypeScript 支持

```typescript
// src/types/icons.d.ts (自动生成)
export type IconName = "icon-search" | "icon-home" | "icon-user";

export interface IconMap {
  "icon-search": string;
  "icon-home": string;
  "icon-user": string;
}

export const iconNames = ["icon-search", "icon-home", "icon-user"] as const;
```

### 2. React 组件示例

```tsx
// src/components/Icon.tsx
import React from "react";
import type { IconName } from "../types/icons";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className}>
      <use href={`#${name}`} />
    </svg>
  );
}

// 使用
import { Icon } from "./components/Icon";

function App() {
  return (
    <div>
      <Icon name="icon-search" size={20} />
      <Icon name="icon-home" className="text-blue-500" />
      <Icon name="icon-user" />
    </div>
  );
}
```

### 3. Vue 组件示例

```vue
<!-- src/components/Icon.vue -->
<template>
  <svg :width="size" :height="size" :class="className">
    <use :href="`#${name}`" />
  </svg>
</template>

<script setup lang="ts">
import type { IconName } from "../types/icons";

interface Props {
  name: IconName;
  size?: number;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  size: 24,
});
</script>

<!-- 使用 -->
<template>
  <div>
    <Icon name="icon-search" :size="20" />
    <Icon name="icon-home" class-name="text-blue-500" />
    <Icon name="icon-user" />
  </div>
</template>
```

### 4. HTML 中直接使用

```html
<!-- 首先确保 sprite 文件被加载 -->
<link rel="preload" href="/icons.svg" as="image" type="image/svg+xml" />

<!-- 使用图标 -->
<svg width="24" height="24">
  <use href="#icon-search"></use>
</svg>

<svg width="24" height="24" class="text-blue-500">
  <use href="#icon-home"></use>
</svg>
```

## ⚙️ 高级配置

### 自定义 ID 生成

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    viteIconsSprite({
      input: "./src/icons",
      output: "./public/icons.svg",

      // 自定义 ID 生成规则
      idGenerator: (filename, filepath) => {
        // 移除 .svg 扩展名，转换为小写
        return filename.replace(/\.svg$/, "").toLowerCase();
      },

      // 文件过滤
      filter: (filepath) => {
        // 跳过以 _ 开头的文件
        return !path.basename(filepath).startsWith("_");
      },
    }),
  ],
});
```

### 多个图标目录

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    viteIconsSprite({
      // 支持多个输入目录
      input: [
        "./src/icons",
        "./src/assets/icons",
        "./node_modules/some-icons/dist",
      ],
      output: "./public/icons.svg",
      prefix: "icon-",
    }),
  ],
});
```

### 环境特定配置

```typescript
// vite.config.ts
export default defineConfig(({ command }) => {
  return {
    plugins: [
      viteIconsSprite({
        input: "./src/icons",
        output: "./public/icons.svg",
        prefix: "icon-",

        // 只在开发模式生成类型，提高构建速度
        generateTypes: command === "serve",
        typesOutput: "./src/types/icons.d.ts",

        // 生产构建时禁用监听
        watch: command === "serve",
      }),
    ],
  };
});
```

## 🔥 开发体验特性

### 1. 热重载支持

当你添加、删除或修改 SVG 文件时，插件会：

- 自动重新生成 sprite 文件
- 更新 TypeScript 类型定义
- 触发浏览器刷新

### 2. 构建时优化

- 自动使用 SVGO 优化 SVG 文件
- 移除不必要的元数据
- 压缩输出文件大小

### 3. TypeScript 集成

- 自动生成类型定义
- IDE 自动补全支持
- 编译时类型检查

## 🚀 部署

构建后的 `public/icons.svg` 文件会自动包含在你的部署包中，可以通过 `/icons.svg` 路径访问。

确保你的服务器正确配置了 SVG 文件的 MIME 类型：`image/svg+xml`
