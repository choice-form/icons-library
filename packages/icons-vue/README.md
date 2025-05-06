# @choiceform/icons-vue

Vue components for SVG icons.

## Installation

```bash
npm install @choiceform/icons-vue
```

## Usage

### Using Icons

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

### Styling with CSS

All icons include a default CSS class name (`choiceform-icon`) that can be used for styling:

```css
.choiceform-icon {
  /* Your custom styles */
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
}
```

#### Custom Class Name

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

### Using Icon Metadata

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

## TypeScript Support

The package includes TypeScript definitions for all components. The metadata also has type definitions for better development experience.

## Icon Features

- All icons have been optimized using SVGO
- Each icon is available as an individual Vue component
- Tree-shakable - only import what you use
- TypeScript support
- Supports Vue 3

## Metadata Features

Each icon has metadata including:

- name: The name of the icon
- category: The category the icon belongs to
- tags: Array of tags for search/filtering
- filename: Original SVG filename
- width: Width of the SVG (if available)
- height: Height of the SVG (if available)
- optimizedSvg: The optimized SVG string
