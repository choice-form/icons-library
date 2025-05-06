# @choiceform/icons-js

JavaScript library for SVG icons.

## Installation

```bash
# npm
npm install @choiceform/icons-js

# pnpm
pnpm add @choiceform/icons-js

# yarn
yarn add @choiceform/icons-js
```

## How to use

Choiceform Icons for JavaScript is built with ES Modules and is fully tree-shakable.

Each icon can be imported and used to generate SVG strings or DOM elements. This way, only the icons that are imported into your project are included in the final bundle. The rest of the icons are tree-shaken away.

### Using with CDN

```html
<!DOCTYPE html>
<body>
  <!-- Use data-icon attribute to specify icons -->
  <i data-icon="workspace"></i>
  <i data-icon="file-upload"></i>
  <i data-icon="settings"></i>

  <!-- Include the UMD version -->
  <script src="https://unpkg.com/@choiceform/icons-js@latest/dist/umd/icons-js.js"></script>
  <script>
    // Initialize all icons
    iconsJs.createIcons({
      icons: iconsJs.default,
    });
  </script>
</body>
```

### Using with ES Modules

```js
import {
  createIcons,
  Workspace,
  FileUpload,
  Settings,
} from "@choiceform/icons-js";

// Only import icons you need (recommended, reduces bundle size)
createIcons({
  icons: {
    Workspace,
    FileUpload,
    Settings,
  },
});
```

### Generate SVG Strings

```js
import { Search, CircleAdd, SettingsSolid } from "@choiceform/icons-js";

// Create an SVG string
const searchSvg = Search.toSvg({
  width: "16",
  height: "16",
  color: "currentColor",
});

// Append icon to element
document.getElementById("icon-container").innerHTML = searchSvg;

// Or create multiple icons
const icons = [Search, CircleAdd, SettingsSolid];
const container = document.getElementById("icons-container");

icons.forEach((icon) => {
  container.innerHTML += icon.toSvg();
});
```

## Parameters

Each icon accepts the following parameters when calling `toSvg()`:

| Name     | Type               | Default          | Description         |
| -------- | ------------------ | ---------------- | ------------------- |
| `width`  | `string \| number` | `'16'`           | Width of the icon   |
| `height` | `string \| number` | `'16'`           | Height of the icon  |
| `color`  | `string`           | `'currentColor'` | Color of the icon   |
| `title`  | `string`           | `undefined`      | Accessibility title |

### Applying parameters

```js
import { Search } from "@choiceform/icons-js";

// Create an SVG with custom parameters
const searchSvg = Search.toSvg({
  width: "32",
  height: "32",
  color: "#1976d2",
  title: "Search icon",
});

document.getElementById("icon-container").innerHTML = searchSvg;
```

## Advanced Usage

### Custom attribute name

By default, the library uses the `data-icon` attribute to find elements to replace. You can customize this attribute name:

```js
import { createIcons, Workspace, FileUpload } from "@choiceform/icons-js";

createIcons({
  nameAttr: "data-cf-icon", // Use data-cf-icon instead of data-icon
  icons: {
    Workspace,
    FileUpload,
  },
});
```

Then use it in HTML like this:

```html
<i data-cf-icon="workspace"></i>
```

### Custom attributes

You can set default attributes for all icons:

```js
import { createIcons, Workspace, FileUpload } from "@choiceform/icons-js";

createIcons({
  attrs: {
    class: ["my-icon-class", "icon"], // Classes will be merged
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

### Creating elements directly

You can create icon elements directly, instead of replacing placeholders:

```js
import { createElement, Workspace } from "@choiceform/icons-js";

// Create an SVG element
const workspaceIcon = createElement(Workspace); // Returns HTMLElement (svg)

// Add to the DOM
const container = document.getElementById("icon-container");
container.appendChild(workspaceIcon);
```

#### Adding custom attributes

```js
import { createElement, FileUpload } from "@choiceform/icons-js";

// Create an icon with custom attributes
const fileUploadIcon = createElement(FileUpload, {
  class: "custom-icon",
  width: "32",
  height: "32",
  fill: "#1976d2",
});

// Add to the DOM
document.body.appendChild(fileUploadIcon);
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

```js
import { iconMetadata } from "@choiceform/icons-js/metadata";

// Get total number of icons
console.log(`Total icons: ${iconMetadata.length}`);

// Create a list of all icon names with categories
const iconList = iconMetadata.map(
  (icon) => `${icon.name} - Category: ${icon.category}`
);

// Display the icon list
const container = document.getElementById("icon-list");
iconList.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  container.appendChild(li);
});
```

## Features

- **Tree Shakable**: Only import the icons you use
- **TypeScript Support**: Full TypeScript definitions
- **Framework Agnostic**: Use with any JavaScript framework or vanilla JS
- **Accessible**: Attributes for accessibility are applied automatically
- **Customizable**: Easy to style with CSS
- **Optimized SVGs**: All icons are optimized with SVGO
- **Multiple Usage Methods**: Support for CDN, ES modules, and direct DOM manipulation

## Metadata Properties

Each icon in the metadata includes:

| Property       | Description                        |
| -------------- | ---------------------------------- |
| `name`         | The name of the icon               |
| `category`     | The category the icon belongs to   |
| `tags`         | Array of tags for search/filtering |
| `filename`     | Original SVG filename              |
| `width`        | Width of the SVG (if available)    |
| `height`       | Height of the SVG (if available)   |
| `optimizedSvg` | The optimized SVG string           |
