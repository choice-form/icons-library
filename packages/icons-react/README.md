# @choiceform/icons-react

React components for SVG icons.

## Installation

```bash
npm install @choiceform/icons-react
```

## Usage

### Using Icons

```jsx
import { Search, CircleAdd, SettingsSolid } from "@choiceform/icons-react";

function App() {
  return (
    <div>
      <Search />
      <CircleAdd />
      <SettingsSolid />
    </div>
  );
}
```

### Using Icon Metadata

The library also exports icon metadata that can be useful for building icon pickers, documentation, or other features that need information about available icons.

```jsx
import { iconMetadata } from "@choiceform/icons-react/metadata";

function IconInfo() {
  return (
    <div>
      <h1>Total Icons: {iconMetadata.length}</h1>
      <ul>
        {iconMetadata.map((icon) => (
          <li key={icon.name}>
            {icon.name} - Category: {icon.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## TypeScript Support

The package includes TypeScript definitions for all components. The metadata also has type definitions for better development experience.

## Icon Features

- All icons have been optimized using SVGO
- Each icon is available as an individual React component
- Tree-shakable - only import what you use
- TypeScript support

## Metadata Features

Each icon has metadata including:

- name: The name of the icon
- category: The category the icon belongs to
- tags: Array of tags for search/filtering
- filename: Original SVG filename
- width: Width of the SVG (if available)
- height: Height of the SVG (if available)
- optimizedSvg: The optimized SVG string
