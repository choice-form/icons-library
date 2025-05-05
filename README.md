# Choiceform Icons Library (Monorepo)

This monorepo contains a comprehensive toolkit for creating, managing, and using SVG icons in Choiceform projects. The repository is organized into three interconnected packages that work together to provide a seamless icon management workflow.

## Repository Structure

This monorepo contains the following packages:

- **[@choiceform/icons-generate](./packages/icons-generate)**: Core package that generates React components from SVG files with metadata support.
- **[@choiceform/icons-figma-plugin](./packages/figma-plugin)**: Figma plugin for exporting SVG icons with proper metadata and formatting.
- **[@choiceform/icons-preview](./packages/preview-app)**: Web application for previewing, searching, and exploring the available icons.

## Features

- **End-to-End Icon Management**: From design in Figma to implementation in React applications.
- **Consistent Format**: Standardized SVG export process with proper metadata.
- **Automatic Component Generation**: SVGs are automatically converted into tree-shakable React components.
- **Rich Metadata Support**: Includes categories (based on folder structure) and tags (from filenames like `icon-name[tag1,tag2].svg`).
- **Interactive Preview**: Browse, search, and preview all icons with their metadata.
- **Color Customization**: By default, black (`#000`) strokes/fills are converted to `currentColor`, allowing color control via CSS.
- **SVG Optimization**: SVGs are optimized using SVGO during the build process.

## Getting Started

### Prerequisites

This project uses [pnpm](https://pnpm.io/) as the package manager. Make sure you have it installed:

```bash
npm install -g pnpm
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/choiceform/icons-library.git
cd icons-library
```

2. Install dependencies:

```bash
pnpm install
```

### Development

To start development across all packages:

```bash
pnpm dev
```

To build all packages:

```bash
pnpm build
```

## Package Details

### @choiceform/icons-generate

Core package that handles the generation of React components from SVG files. It processes SVG files with metadata (categories and tags) and outputs optimized React components.

#### Usage

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

### @choiceform/icons-figma-plugin

Figma plugin that facilitates the export of SVG icons with proper formatting and metadata. It ensures consistency in the icon design process and prepares SVGs for the generation pipeline.

#### Features

- Export icons directly from Figma with proper naming conventions
- Add metadata (tags, categories) during the export process
- Batch export multiple icons at once
- Ensure consistent formatting across the icon library

### @choiceform/icons-preview

Web application for previewing and exploring all available icons. It provides an interactive interface to browse, search, and copy code snippets for using icons in your applications.

#### Features

- Search icons by name, category, or tag
- Preview icons with different sizes and colors
- Copy React import code snippets
- Responsive design for desktop and mobile

## Contributing

Contributions to any of the packages are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
