# @choiceform/icons-sprite

Generate SVG sprite files with symbols from individual SVG icons. Supports CLI, API, and Vite plugin usage.

## 📦 Installation

```bash
# pnpm
pnpm add @choiceform/icons-sprite

# npm
npm install @choiceform/icons-sprite

# yarn
yarn add @choiceform/icons-sprite
```

## ✨ Features

- 🔧 **Multiple Usage Methods**: CLI, API, Vite plugin
- ⚡ **Great DX**: File watching, hot reload, auto-regeneration
- 📝 **TypeScript Support**: Auto-generated type definitions with full type safety
- 🚀 **SVG Optimization**: Built-in SVGO optimization to reduce file size
- 🎯 **Flexible Configuration**: Custom ID generation, file filtering, prefix/suffix
- 🔌 **Framework Integration**: Supports React, Vue, Angular, HTML, etc.

## 🚀 Quick Start

### CLI Usage

```bash
# Basic usage
npx icons-sprite ./src/icons --output ./public/icons.svg

# Generate type definitions
npx icons-sprite ./src/icons --output ./public/icons.svg --generate-types --types-output ./src/types/icons.d.ts

# Use config file
npx icons-sprite --config ./sprite.config.js

# Create config file
npx icons-sprite init
```

### Vite Project Integration

For Vite projects, using the plugin is recommended:

```bash
# Installation
npm install @choiceform/icons-sprite --save-dev
```

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { viteIconsSprite } from "@choiceform/icons-sprite/vite";

export default defineConfig({
  plugins: [
    viteIconsSprite({
      input: "./src/icons",
      output: "./public/icons.svg",
      prefix: "icon-",
      generateTypes: true,
      typesOutput: "./src/types/icons.d.ts",
    }),
  ],
});
```

### API Usage

```typescript
import { generateSprite } from "@choiceform/icons-sprite";

const result = await generateSprite({
  input: "./src/icons",
  output: "./public/icons.svg",
  prefix: "icon-",
  optimize: true,
  generateTypes: true,
  typesOutput: "./src/types/icons.d.ts",
});

console.log(`Generated ${result.symbolCount} icons`);
```

### Vite Plugin Usage

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { viteIconsSprite } from "@choiceform/icons-sprite/vite";

export default defineConfig({
  plugins: [
    viteIconsSprite({
      // Input directory
      input: "./src/icons",
      // Output file
      output: "./public/icons.svg",
      // ID prefix
      prefix: "icon-",
      // Generate TypeScript types
      generateTypes: true,
      typesOutput: "./src/types/icons.d.ts",
      // Enable in development mode
      dev: true,
      // Enable in build mode
      build: true,
      // Watch file changes
      watch: true,
    }),
  ],
});
```

#### Vite Plugin Configuration Options

| Option  | Type      | Default | Description                              |
| ------- | --------- | ------- | ---------------------------------------- |
| `dev`   | `boolean` | `true`  | Enable in development mode               |
| `build` | `boolean` | `true`  | Enable in build mode                     |
| `watch` | `boolean` | `true`  | Watch file changes for auto-regeneration |

Other configuration options are the same as CLI.

## ⚙️ Configuration

### Configuration File

Supports the following configuration file names:

- `sprite.config.js`
- `sprite.config.mjs`
- `sprite.config.ts`
- `icons-sprite.config.js`
- `icons-sprite.config.mjs`
- `icons-sprite.config.ts`

```javascript
// sprite.config.js
export default {
  input: "./src/icons",
  output: "./public/icons.svg",
  prefix: "icon-",
  suffix: "",
  optimize: true,
  generateTypes: true,
  typesOutput: "./src/types/icons.d.ts",

  // Custom ID generation
  idGenerator: (filename, filepath) => {
    return filename.replace(/\.svg$/, "").toLowerCase();
  },

  // File filtering
  filter: (filepath) => {
    return !filepath.includes("deprecated");
  },

  // SVGO configuration
  svgoConfig: {
    plugins: ["preset-default", { name: "removeViewBox", active: false }],
  },
};
```

### Configuration Options

| Option          | Type                 | Default | Description                          |
| --------------- | -------------------- | ------- | ------------------------------------ |
| `input`         | `string \| string[]` | -       | Input directory or file patterns     |
| `output`        | `string`             | -       | Output file path                     |
| `prefix`        | `string`             | `''`    | Symbol ID prefix                     |
| `suffix`        | `string`             | `''`    | Symbol ID suffix                     |
| `optimize`      | `boolean`            | `true`  | Whether to optimize SVG              |
| `svgoConfig`    | `SvgoConfig`         | -       | SVGO configuration                   |
| `generateTypes` | `boolean`            | `false` | Whether to generate TypeScript types |
| `typesOutput`   | `string`             | -       | TypeScript types output path         |
| `idGenerator`   | `function`           | -       | Custom ID generation function        |
| `includeHidden` | `boolean`            | `false` | Whether to include hidden files      |
| `filter`        | `function`           | -       | File filtering function              |

## 📄 Output Format

### SVG Sprite

```xml
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="icon-search" viewBox="0 0 24 24">
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </symbol>
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3"/>
  </symbol>
</svg>
```

### TypeScript Types

```typescript
// Auto-generated by @choiceform/icons-sprite
export type IconName = "search" | "home" | "user";

export interface IconMap {
  search: string;
  home: string;
  user: string;
}

export const iconNames = ["search", "home", "user"] as const;
```

## 🔧 Usage in Projects

### 1. HTML Usage

```html
<!-- Include sprite file -->
<svg style="display: none;">
  <!-- sprite content -->
</svg>

<!-- Use icons -->
<svg>
  <use href="#icon-search"></use>
</svg>
```

### 2. React Usage

```tsx
// IconSprite.tsx
export function IconSprite() {
  return <svg style={{ display: "none" }}>{/* sprite content */}</svg>;
}

// Icon.tsx
interface IconProps {
  name: string;
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

// Usage
<Icon name="icon-search" size={20} />;
```

### 3. Vue Usage

```vue
<!-- Icon.vue -->
<template>
  <svg :width="size" :height="size" :class="className">
    <use :href="`#${name}`" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  size?: number;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  size: 24,
});
</script>

<!-- Usage -->
<Icon name="icon-search" :size="20" />
```

## 🔨 Development

```bash
# Clone project
git clone <repo-url>
cd icons-sprite

# Install dependencies
pnpm install

# Development mode
pnpm dev

# Build
pnpm build

# Test
pnpm test
```

## 📄 License

MIT
