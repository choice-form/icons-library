# @choiceform/icons-generate

Core package that handles the generation of React components from SVG files for the Choiceform icons library.

## Overview

This package automatically transforms SVG icon files into optimized, tree-shakable React components with proper TypeScript typings. It serves as the foundation of the Choiceform icons ecosystem, processing raw SVGs (typically exported from Figma using the companion plugin) into ready-to-use React components.

## Features

- **Automatic Component Generation**: Converts SVG files into optimized React components
- **Rich Metadata Support**: Processes categories (from folder structure) and tags (from filenames)
- **SVG Optimization**: Uses SVGO to optimize SVGs before converting to React components
- **Color Customization**: Converts black (`#000`) fills/strokes to `currentColor` for easy styling
- **TypeScript Support**: Generates proper TypeScript declarations for all components
- **Tree-Shaking Support**: Enables importing individual components for optimal bundle size

## Installation

```bash
# Using npm
npm install @choiceform/icons-generate

# Using yarn
yarn add @choiceform/icons-generate

# Using pnpm
pnpm add @choiceform/icons-generate
```

## Usage

### Importing Icons

```tsx
import { CheckCircle, User } from "@choiceform/icons-generate";

function MyComponent() {
  return (
    <div>
      <User className="w-5 h-5 text-blue-500" />
      <CheckCircle size={32} />
    </div>
  );
}
```

### Component Props

All icon components accept the following props:

```tsx
interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
}
```

## Adding Custom Icons

1. Place your SVG files in the `icons/` directory. You can create subdirectories for categorization (e.g., `icons/ui/`, `icons/logos/`).
2. **Naming Convention**: Use kebab-case for filenames (e.g., `arrow-right.svg`).
3. **Tags (Optional)**: Include them in square brackets before the `.svg` extension: `arrow-right[navigation,direction,next].svg`.
4. **Run Generation**: Execute `pnpm generate` to process the SVGs and generate components.

## Commands

- `pnpm generate`: Generates React components from SVG files in the `icons/` directory
- `pnpm build`: Runs generation and builds the package for distribution
- `pnpm dev`: Watches for changes in the `icons/` directory and regenerates components

## How It Works

1. **SVG Collection**: SVG files are collected from the `icons/` directory and its subdirectories
2. **Metadata Extraction**: Component names, categories, and tags are extracted from filenames and directory structure
3. **SVG Optimization**: SVGs are optimized using SVGO configuration
4. **Component Generation**: React components are generated using SVGR
5. **Index Generation**: Index files are created to export all components
6. **TypeScript Declarations**: TypeScript declaration files are generated

## Development

To contribute to this package:

1. Clone the repository
2. Install dependencies (`pnpm install`)
3. Make changes to the source files
4. Test your changes (`pnpm generate` and `pnpm build`)
5. Submit a pull request

## License

MIT
