# @choiceform/icons-solid

Solid.js components for SVG icons.

## Installation

```bash
npm install @choiceform/icons-solid
# or
pnpm add @choiceform/icons-solid
```

## Usage

### Basic Usage

```jsx
import { Workspace, FileUpload } from "@choiceform/icons-solid";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* Default size (24x24) and color (currentColor) */}
      <Workspace />

      {/* Custom size and color */}
      <FileUpload width={32} height={32} color="#1976d2" />
    </div>
  );
}

export default App;
```

### Props

All icons accept the following props:

| Prop             | Type               | Default          | Description                                     |
| ---------------- | ------------------ | ---------------- | ----------------------------------------------- |
| `width`          | `number \| string` | `"24"`           | Width of the icon                               |
| `height`         | `number \| string` | `"24"`           | Height of the icon                              |
| `color`          | `string`           | `"currentColor"` | Color of the icon                               |
| `title`          | `string`           | `undefined`      | Accessibility title (sets aria-hidden to false) |
| Additional props | `any`              | -                | Any valid SVG attributes                        |

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

### Metadata

You can access metadata for all the icons:

```jsx
import { iconMetadata } from "@choiceform/icons-solid/metadata";

// iconMetadata is an array of objects with icon information
console.log(iconMetadata);
```

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
