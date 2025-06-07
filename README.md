# Choiceform Icons

A comprehensive, customizable SVG icon library designed for Choiceform products.

![GitHub license](https://img.shields.io/github/license/choice-form/icons-library)
![GitHub package version](https://img.shields.io/github/package-json/v/choice-form/icons-library)
![Build Status](https://img.shields.io/github/workflow/status/choice-form/icons-library/CI)

## Overview

Choiceform Icons is a collection of beautifully designed SVG icons, optimized for web usage. Each icon is available in multiple framework formats, allowing for seamless integration into various technology stacks.

## Packages

| Package                                                 | Description                      | Version                                                                                                                           |
| ------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`@choiceform/icons`](./packages/icons)                 | Core SVG icon files and metadata | -                                                                                                                                 |
| [`@choiceform/icons-react`](./packages/icons-react)     | React components                 | [![npm version](https://img.shields.io/npm/v/@choiceform/icons-react)](https://www.npmjs.com/package/@choiceform/icons-react)     |
| [`@choiceform/icons-vue`](./packages/icons-vue)         | Vue components                   | [![npm version](https://img.shields.io/npm/v/@choiceform/icons-vue)](https://www.npmjs.com/package/@choiceform/icons-vue)         |
| [`@choiceform/icons-angular`](./packages/icons-angular) | Angular components               | [![npm version](https://img.shields.io/npm/v/@choiceform/icons-angular)](https://www.npmjs.com/package/@choiceform/icons-angular) |
| [`@choiceform/icons-solid`](./packages/icons-solid)     | SolidJS components               | [![npm version](https://img.shields.io/npm/v/@choiceform/icons-solid)](https://www.npmjs.com/package/@choiceform/icons-solid)     |
| [`@choiceform/icons-js`](./packages/icons-js)           | JavaScript library               | [![npm version](https://img.shields.io/npm/v/@choiceform/icons-js)](https://www.npmjs.com/package/@choiceform/icons-js)           |
| [`@choiceform/icons-sprite`](./packages/icons-sprite)   | SVG sprite generator             | [![npm version](https://img.shields.io/npm/v/@choiceform/icons-sprite)](https://www.npmjs.com/package/@choiceform/icons-sprite)   |
| [`@choiceform/icons-core`](./packages/icons-core)       | Core utilities                   | -                                                                                                                                 |
| [`@choiceform/figma-plugin`](./packages/figma-plugin)   | Figma plugin                     | -                                                                                                                                 |

## Quick Start

### React

```bash
# npm
npm install @choiceform/icons-react

# pnpm
pnpm add @choiceform/icons-react

# yarn
yarn add @choiceform/icons-react
```

```jsx
import { Search, CircleAdd, SettingsSolid } from "@choiceform/icons-react";

function App() {
  return (
    <div>
      <Search width={16} height={16} />
      <CircleAdd color="#ff5252" />
      <SettingsSolid />
    </div>
  );
}
```

### Vue

```bash
# npm
npm install @choiceform/icons-vue

# pnpm
pnpm add @choiceform/icons-vue

# yarn
yarn add @choiceform/icons-vue
```

```vue
<template>
  <div>
    <Search width="16" height="16" />
    <CircleAdd color="#ff5252" />
    <SettingsSolid />
  </div>
</template>

<script setup>
import { Search, CircleAdd, SettingsSolid } from "@choiceform/icons-vue";
</script>
```

### Angular

```bash
# npm
npm install @choiceform/icons-angular

# pnpm
pnpm add @choiceform/icons-angular

# yarn
yarn add @choiceform/icons-angular
```

```typescript
import { Component } from "@angular/core";
import {
  WorkspaceComponent,
  FileUploadComponent,
} from "@choiceform/icons-angular";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [WorkspaceComponent, FileUploadComponent],
  template: `
    <cf-workspace></cf-workspace>
    <cf-file-upload
      [width]="16"
      [height]="16"
      [color]="'#1976d2'"
    ></cf-file-upload>
  `,
})
export class ExampleComponent {}
```

## Features

- **Multiple Framework Support**: React, Vue, Angular, SolidJS, and vanilla JavaScript
- **Tree Shakable**: Only import the icons you use
- **Optimized SVGs**: All icons are optimized with SVGO
- **Consistent Design**: All icons follow the Choiceform design guidelines
- **TypeScript Support**: Full TypeScript definitions for all components
- **Customizable**: Style icons with CSS or component props
- **Metadata Included**: Rich metadata for building icon pickers and documentation

## Development

This is a monorepo managed with pnpm workspaces. To get started with development:

```bash
# Install dependencies
pnpm install

# Generate icons for all frameworks
pnpm run generate

# Build all packages
pnpm run build

# Run the preview app
pnpm run preview
```

### Project Structure

```
choiceform-icons/
├── packages/
│   ├── icons/                # Source SVG files
│   ├── icons-core/           # Core utilities
│   ├── icons-react/          # React components
│   ├── icons-vue/            # Vue components
│   ├── icons-angular/        # Angular components
│   ├── icons-solid/          # SolidJS components
│   ├── icons-js/             # JavaScript library
│   ├── figma-plugin/         # Figma plugin source
│   └── preview-app/          # Preview application
└── scripts/                  # Build and utility scripts
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on how to submit pull requests, report issues, or request features.

## License

This project is licensed under the [MIT License](./LICENSE).

## Credits

Choiceform Icons is developed and maintained by the Choiceform design and engineering team.
