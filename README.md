# @choiceform/icons-library

SVG icon library for the Choiceform project.

This package automatically generates React components from SVG files stored in the `icons/` directory, providing a consistent and performant way to use icons across different Choiceform applications.

## Features

- **Automatic Component Generation:** SVGs in the `icons/` directory are automatically converted into React components.
- **Tree-Shaking Support:** Import individual icon components directly for optimal bundle size in production.
- **Metadata & Search:** Generated metadata includes categories (based on folder structure) and tags (from filenames like `icon-name[tag1,tag2].svg`) to facilitate searching and organization.
- **SVG Optimization:** SVGs are optimized using SVGO during the build process.
- **Color Customization:** By default, black (`#000`) strokes/fills are converted to `currentColor`, allowing color control via CSS.

## Installation

Install the package using npm, yarn, or pnpm:

```bash
# Using npm
npm install @choiceform/icons-library

# Using yarn
yarn add @choiceform/icons-library

# Using pnpm
pnpm add @choiceform/icons-library
```

## Usage

There are two primary ways to use the icons:

**Direct Import (Recommended for Tree-Shaking):**

Import the specific icon component you need directly. This ensures that only the icons you use are included in your final bundle.

```tsx
import { CheckCircle14, User } from "@choiceform/icons-library";

function MyComponent() {
  return (
    <div>
      <User className="w-5 h-5 text-blue-500" />
      <CheckCircle14 size={32} />
    </div>
  );
}
```

Component names are generated in PascalCase based on the SVG filename (excluding tags in `[]`). Folder structure translates to prefixes (e.g., `icons/ui/check.svg` becomes `UiCheck`).

## Adding Icons

1. Place your new `.svg` files in the `icons/` directory. You can create subdirectories for categorization (e.g., `icons/ui/`, `icons/logos/`).
2. **Naming Convention:** Use kebab-case for filenames (e.g., `arrow-right.svg`).
3. **Tags (Optional):** To add search tags, include them in square brackets before the `.svg` extension, separated by commas: `arrow-right[navigation,direction,next].svg`.
4. **Run Generation:** Execute `pnpm generate` (or `pnpm build`, which includes the generate step) in the project root.

## Available Scripts

- `pnpm generate`: Generates icon components and metadata into the `src/generated/` directory.
- `pnpm build`: Generates icon components and builds distributable files (`.js`, `.d.ts`) for the library into the `dist/` directory.
- `pnpm dev`: Watches the `icons/` directory for changes and automatically runs the `generate` command.

## Contributing

Contributions to the icon library are welcome! Please follow the guidelines in the "Adding Icons" section above and submit a Pull Request.
