# Vite + React 项目中使用 SVG Sprite

## 方法一：index.html 中直接引入（推荐）

```html
<!-- public/index.html 或 index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- 在 body 底部引入 sprite 文件 -->
    <script>
      // 动态加载 sprite 文件
      fetch("/icons.svg")
        .then((response) => response.text())
        .then((svgText) => {
          // 创建一个隐藏的 div 来包含 sprite
          const div = document.createElement("div");
          div.innerHTML = svgText;
          div.style.display = "none";
          document.body.appendChild(div);
        })
        .catch((error) => console.error("Failed to load icons:", error));
    </script>

    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 方法二：React 组件方式

### 1. 创建 IconSprite 组件

```tsx
// src/components/IconSprite.tsx
import { useEffect } from "react";

export function IconSprite() {
  useEffect(() => {
    // 检查是否已经加载过
    if (document.getElementById("svg-sprite-container")) {
      return;
    }

    // 动态加载 sprite 文件
    fetch("/icons.svg")
      .then((response) => response.text())
      .then((svgText) => {
        const container = document.createElement("div");
        container.id = "svg-sprite-container";
        container.innerHTML = svgText;
        container.style.display = "none";
        document.body.appendChild(container);
      })
      .catch((error) => console.error("Failed to load SVG sprite:", error));
  }, []);

  return null; // 这个组件不渲染任何内容
}
```

### 2. 在 App 组件中使用

```tsx
// src/App.tsx
import { IconSprite } from "./components/IconSprite";
import { Icon } from "./components/Icon";

function App() {
  return (
    <div className="App">
      {/* 在应用顶部加载 IconSprite */}
      <IconSprite />

      <header>
        <h1>My App</h1>
        <Icon name="icon-search" size={24} />
        <Icon name="icon-home" size={24} />
      </header>

      {/* 其他内容 */}
    </div>
  );
}

export default App;
```

### 3. 创建 Icon 组件

```tsx
// src/components/Icon.tsx
import type { IconName } from "../types/icons";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

export function Icon({ name, size = 24, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={{ color }}
      fill="currentColor"
    >
      <use href={`#${name}`} />
    </svg>
  );
}
```

## 方法三：使用 React Hook

```tsx
// src/hooks/useSvgSprite.ts
import { useEffect, useState } from "react";

export function useSvgSprite(spriteUrl: string = "/icons.svg") {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 检查是否已经加载过
    if (document.getElementById("svg-sprite-container")) {
      setLoaded(true);
      return;
    }

    fetch(spriteUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((svgText) => {
        const container = document.createElement("div");
        container.id = "svg-sprite-container";
        container.innerHTML = svgText;
        container.style.display = "none";
        document.body.appendChild(container);
        setLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load SVG sprite:", err);
        setError(err.message);
      });
  }, [spriteUrl]);

  return { loaded, error };
}
```

### 在组件中使用 Hook

```tsx
// src/App.tsx
import { useSvgSprite } from "./hooks/useSvgSprite";
import { Icon } from "./components/Icon";

function App() {
  const { loaded, error } = useSvgSprite();

  if (error) {
    console.error("SVG Sprite loading error:", error);
  }

  return (
    <div className="App">
      <header>
        <h1>My App</h1>
        {loaded && (
          <>
            <Icon name="icon-search" size={24} />
            <Icon name="icon-home" size={24} />
          </>
        )}
      </header>
    </div>
  );
}
```

## 方法四：Vite 插件自动注入（高级）

### 1. 修改 Vite 配置

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteIconsSprite } from "@choiceform/icons-sprite/vite";

export default defineConfig({
  plugins: [
    react(),
    viteIconsSprite({
      input: "./src/icons",
      output: "./public/icons.svg",
      prefix: "icon-",
      generateTypes: true,
      typesOutput: "./src/types/icons.d.ts",
    }),
    // 自定义插件来注入 sprite
    {
      name: "inject-svg-sprite",
      transformIndexHtml(html) {
        // 在开发模式下注入加载脚本
        const script = `
          <script>
            fetch('/icons.svg')
              .then(response => response.text())
              .then(svgText => {
                const div = document.createElement('div');
                div.innerHTML = svgText;
                div.style.display = 'none';
                document.body.appendChild(div);
              })
              .catch(error => console.error('Failed to load icons:', error));
          </script>
        `;
        return html.replace("</body>", script + "</body>");
      },
    },
  ],
});
```

## 方法五：使用动态导入

```tsx
// src/utils/loadSprite.ts
export async function loadSvgSprite(url: string = "/icons.svg"): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch sprite: ${response.statusText}`);
    }

    const svgText = await response.text();

    // 检查是否已经存在
    const existingContainer = document.getElementById("svg-sprite-container");
    if (existingContainer) {
      existingContainer.remove();
    }

    // 创建新的容器
    const container = document.createElement("div");
    container.id = "svg-sprite-container";
    container.innerHTML = svgText;
    container.style.display = "none";
    document.body.appendChild(container);
  } catch (error) {
    console.error("Error loading SVG sprite:", error);
    throw error;
  }
}
```

### 在 main.tsx 中使用

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { loadSvgSprite } from "./utils/loadSprite";

// 在渲染应用前加载 sprite
loadSvgSprite()
  .then(() => {
    console.log("SVG sprite loaded successfully");
  })
  .catch((error) => {
    console.error("Failed to load SVG sprite:", error);
  });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 推荐方案

**对于大多数项目，推荐使用方法一（index.html 直接引入）或方法二（React 组件方式）：**

1. **方法一**：简单直接，适合简单项目
2. **方法二**：更符合 React 生态，便于错误处理和状态管理
3. **方法三**：适合需要复杂控制逻辑的场景
4. **方法四**：适合想要完全自动化的团队

选择哪种方式取决于你的具体需求和团队偏好！
