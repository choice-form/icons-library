# @choiceform/icons-solid

SolidJS components for SVG icons.

## Installation

```bash
# npm
npm install @choiceform/icons-solid

# pnpm
pnpm add @choiceform/icons-solid

# yarn
yarn add @choiceform/icons-solid
```

## How to use

Choiceform Icons for SolidJS is built with ES Modules and is fully tree-shakable.

Each icon can be imported as a SolidJS component, which renders an inline SVG element. This way, only the icons that are imported into your project are included in the final bundle. The rest of the icons are tree-shaken away.

### Example

```jsx
import { Search, CircleAdd, SettingsSolid } from "@choiceform/icons-solid";

function App() {
  return (
    <div>
      <Search />
      <CircleAdd />
      <SettingsSolid />
    </div>
  );
}

export default App;
```

## Props

Each icon component accepts the following props:

| Name     | Type               | Default          | Description         |
| -------- | ------------------ | ---------------- | ------------------- |
| `width`  | `string \| number` | `'16'`           | Width of the icon   |
| `height` | `string \| number` | `'16'`           | Height of the icon  |
| `color`  | `string`           | `'currentColor'` | Color of the icon   |
| `title`  | `string`           | `undefined`      | Accessibility title |

### Applying props

```jsx
import { Search } from "@choiceform/icons-solid";

function App() {
  return <Search width={32} height={32} color="#1976d2" />;
}

export default App;
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

```jsx
import { createSignal, For } from "solid-js";
import { iconMetadata } from "@choiceform/icons-solid/metadata";

function IconList() {
  const [icons] = createSignal(iconMetadata);

  return (
    <div>
      <h1>Total Icons: {icons().length}</h1>
      <ul>
        <For each={icons()}>
          {(icon) => (
            <li>
              {icon.name} - Category: {icon.category}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

export default IconList;
```

## Features

- **Tree Shakable**: Only import the icons you use
- **TypeScript Support**: Full TypeScript definitions for all components
- **Accessible**: All icons have proper ARIA attributes
- **Customizable**: Style icons with CSS or component props
- **Optimized SVGs**: All icons are optimized with SVGO
- **Fine-grained Updates**: Leverages SolidJS's fine-grained reactivity system

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

## Development

### Build

```bash
npm run build
```

### Generate icons

```bash
npm run generate
```

### Watch for changes

```bash
npm run dev
```
