# @choiceform/icons-core

Core utilities for Choiceform SVG icons.

## Installation

```bash
# npm
npm install @choiceform/icons-core

# pnpm
pnpm add @choiceform/icons-core

# yarn
yarn add @choiceform/icons-core
```

## How to use

The `icons-core` package provides core utilities used by all Choiceform icon framework implementations. It contains common helpers, types, and SVG processing functions.

Most end users won't need to import from this package directly, as each framework-specific package (`icons-react`, `icons-vue`, etc.) wraps these utilities in appropriate framework components.

### Example (for library developers)

```js
import {
  processIcon,
  IconNode,
  IconAttributes,
  readConfigFile,
} from "@choiceform/icons-core";

// Process a raw SVG string into an IconNode object
const svg = "<svg>...</svg>";
const iconNode = processIcon(svg, "MyIcon");

// Create a framework-specific component using the IconNode
function createIconComponent(iconNode) {
  return function MyIcon(attributes) {
    // Merge default and custom attributes
    const mergedAttrs = {
      ...getDefaultAttributes(),
      ...attributes,
    };

    // Turn the IconNode into an appropriate component for your framework
    return buildComponentFromIconNode(iconNode, mergedAttrs);
  };
}
```

## Exports

| Export                 | Type        | Description                                      |
| ---------------------- | ----------- | ------------------------------------------------ |
| `processIcon`          | `function`  | Processes raw SVG string into an IconNode        |
| `getDefaultAttributes` | `function`  | Returns default attributes for icons             |
| `readConfigFile`       | `function`  | Reads and parses the icon-config.json file       |
| `IconNode`             | `interface` | Type definition for internal icon representation |
| `IconAttributes`       | `interface` | Type definition for icon attributes              |
| `IconMetadata`         | `interface` | Type definition for icon metadata information    |

## For Framework Package Creators

This package is primarily for developers who are creating framework-specific icon packages.

### Creating a new framework implementation

1. Import the core utilities and types from this package
2. Create wrapper components for your framework
3. Use the `processIcon` utility to handle raw SVG content
4. Apply your framework-specific component structure

## Features

- **Shared Utilities**: Common code shared between all icon packages
- **TypeScript Support**: Full TypeScript definitions
- **SVG Processing**: Utilities for parsing and manipulating SVG content
- **Consistent Implementation**: Ensures consistent behavior across frameworks
- **Configuration Management**: Utilities for reading and applying icon configuration

## Public API Types

Here are the most important types exported by the library:

```typescript
interface IconNode {
  tag: string;
  attrs: Record<string, string>;
  children?: IconNode[];
}

interface IconAttributes {
  width?: string | number;
  height?: string | number;
  color?: string;
  title?: string;
  [key: string]: any;
}

interface IconMetadata {
  name: string;
  category?: string;
  tags?: string[];
  filename: string;
  width?: string;
  height?: string;
  optimizedSvg: string;
}
```
