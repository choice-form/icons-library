# @choiceform/icons

Core SVG icons library for Choiceform.

## Overview

This package contains the core SVG icon files used by all Choiceform icon packages.
It serves as the source of truth for the official Choiceform icon set.

If you're looking to use these icons in your project, you should install one of the framework-specific packages:

- **React**: [@choiceform/icons-react](https://www.npmjs.com/package/@choiceform/icons-react)
- **Vue**: [@choiceform/icons-vue](https://www.npmjs.com/package/@choiceform/icons-vue)
- **Angular**: [@choiceform/icons-angular](https://www.npmjs.com/package/@choiceform/icons-angular)
- **SolidJS**: [@choiceform/icons-solid](https://www.npmjs.com/package/@choiceform/icons-solid)
- **JavaScript**: [@choiceform/icons-js](https://www.npmjs.com/package/@choiceform/icons-js)

## Installation

```bash
# npm
npm install @choiceform/icons

# pnpm
pnpm add @choiceform/icons

# yarn
yarn add @choiceform/icons
```

## Contents

This package includes:

- Original optimized SVG files
- Icon metadata
- Type definitions

## Directory Structure

```
@choiceform/icons/
├── svg/              # Original SVG files
├── metadata.json     # Icon metadata
└── index.d.ts        # Type definitions
```

## Using the SVG Files Directly

You can import the SVG files directly if needed:

```js
import { readFileSync } from "fs";
import { join } from "path";

// Get the path to the SVG directory
const svgPath = require.resolve("@choiceform/icons/svg");

// Read an SVG file
const workspaceSvg = readFileSync(join(svgPath, "workspace.svg"), "utf8");
```

## Metadata

The package includes a metadata file with information about all icons:

```js
import metadata from "@choiceform/icons/metadata.json";

// Get all icon names
const iconNames = metadata.map((icon) => icon.name);

// Find icons by category
const interfaceIcons = metadata.filter((icon) => icon.category === "interface");
```

## Features

- **Optimized SVGs**: All icons are optimized for performance and consistency
- **Consistent Design**: All icons follow the Choiceform design guidelines
- **Categorized**: Icons are organized into categories for easy discovery
- **Metadata**: Detailed information about each icon
- **TypeScript Support**: Full TypeScript definitions

## For Contributors

If you want to contribute to the Choiceform icon library, please see our [Contribution Guidelines](https://github.com/choiceform/icons-library/blob/main/CONTRIBUTING.md).

### Adding New Icons

1. Add your SVG file to the `svg` directory
2. Follow the naming conventions (kebab-case)
3. Run the build process to regenerate the icon packages:

```bash
npm run build
```

## License

This project is licensed under the [MIT License](https://github.com/choiceform/icons-library/blob/main/LICENSE).
