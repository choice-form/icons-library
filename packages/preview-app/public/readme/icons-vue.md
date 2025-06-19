# @choiceform/icons-vue

Vue components for SVG icons.

## Installation

```bash
# npm
npm install @choiceform/icons-vue

# pnpm
pnpm add @choiceform/icons-vue

# yarn
yarn add @choiceform/icons-vue
```

## How to use

Choiceform Icons is built with ES Modules and is completely tree-shakable.

Each icon can be imported as a Vue component, which renders an inline SVG element. This way, only the icons that are imported into your project are included in the final bundle. The rest of the icons are tree-shaken away.

### Example

```vue
<template>
  <div>
    <Search />
    <CircleAdd />
    <SettingsSolid />
  </div>
</template>

<script setup>
import { Search, CircleAdd, SettingsSolid } from "@choiceform/icons-vue";
</script>
```

## Props

| Name     | Type               | Default          | Description         |
| -------- | ------------------ | ---------------- | ------------------- |
| `width`  | `string \| number` | `'16'`           | Width of the icon   |
| `height` | `string \| number` | `'16'`           | Height of the icon  |
| `color`  | `string`           | `'currentColor'` | Color of the icon   |
| `title`  | `string`           | `undefined`      | Accessibility title |

### Applying props

```vue
<template>
  <Search width="32" height="32" color="#1976d2" />
</template>

<script setup>
import { Search } from "@choiceform/icons-vue";
</script>
```

## Styling with CSS

All icons include a default CSS class name (`choiceform-icon`) that can be used for styling:

```css
.choiceform-icon {
  /* Your custom styles */
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
}
```

### Custom Class Name

The default class name can be changed globally by modifying the `icon-config.json` file at the root of the project:

```json
{
  "iconClassName": "my-custom-icon-class"
}
```

After changing the configuration, regenerate the icons:

```bash
npm run generate
```

## Using Icon Metadata

The library also exports icon metadata that can be useful for building icon pickers, documentation, or other features that need information about available icons.

```vue
<template>
  <div>
    <h1>Total Icons: {{ iconMetadata.length }}</h1>
    <ul>
      <li v-for="icon in iconMetadata" :key="icon.name">
        {{ icon.name }} - Category: {{ icon.category }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { iconMetadata } from "@choiceform/icons-vue/metadata";
</script>
```

## Features

- **Tree Shakable**: Only import the icons you use
- **TypeScript Support**: Full TypeScript definitions for all components
- **Accessible**: All icons have proper ARIA attributes
- **Customizable**: Style icons with CSS or component props
- **Optimized SVGs**: All icons are optimized with SVGO

## Metadata Properties

Each icon in the metadata includes:

| Property   | Description                        |
| ---------- | ---------------------------------- |
| `name`     | The name of the icon               |
| `category` | The category the icon belongs to   |
| `tags`     | Array of tags for search/filtering |
| `filename` | Original SVG filename              |
| `width`    | Width of the SVG (if available)    |
| `height`   | Height of the SVG (if available)   |
