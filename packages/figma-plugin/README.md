# @choiceform/icons-figma-plugin

![cover](https://github.com/user-attachments/assets/d9cb55e3-7e8e-4f85-8f33-574b7e3e2c9a)

[choiceform-svg-icons-exporter](https://www.figma.com/community/plugin/1499166753064086486/choiceform-svg-icons-exporter)

A Figma plugin built with React that helps designers and developers quickly edit and export SVG icons along with their metadata. This plugin is an essential part of the Choiceform Icons Library ecosystem, streamlining the workflow from design to implementation.

## Features

- Export selected frames as SVG icons with proper formatting
- Automatically generates metadata for each icon (name, dimensions, category)
- Add and edit tags for icons directly in the UI using a custom TagInput component
- Choose from preset tag categories for consistent metadata
- Download all icons and metadata as a ZIP file ready for the generator package
- Ensures SVGs follow the required format for the @choiceform/icons-generate package

## Workflow Integration

This plugin is designed to work seamlessly with the other components in the Choiceform Icons monorepo:

1. **Design icons in Figma**
2. **Use this plugin to export icons with proper metadata**
3. The exported SVGs can be placed in the `icons/` directory of the @choiceform/icons-generate package
4. Run the generator to create React components
5. View the results in the preview app

## Development

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm/yarn

### Setup

1. From the monorepo root, install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm --filter @choiceform/icons-figma-plugin dev
   ```

3. Open Figma Desktop app
4. Go to `Plugins > Development > Import plugin from manifest...`
5. Select the `manifest.json` file from the `packages/figma-plugin` directory

### Building for Production

To build the plugin for production:

```bash
pnpm --filter @choiceform/icons-figma-plugin build
```

## Usage

1. Select one or more frames in Figma
2. Run the plugin from the Plugins menu
3. Click "Export Selected Frames" to generate SVGs and metadata
4. Edit tags for each icon if needed by clicking "Edit Tags"
5. Click "Download All" to download a ZIP file containing the SVGs and a metadata.json file

### Naming Conventions

For the best results with the icons generator:

- Name frames in kebab-case (e.g., `arrow-right`)
- Add tags in square brackets (e.g., `arrow-right[navigation,direction,next]`)
- Organize frames in pages or groups that will become categories in the final library

## Custom Components

### TagInput Component

The plugin uses a custom TagInput component that allows for intuitive tag entry:

- Type text and press Enter, comma, or space to create a tag
- Click "×" to remove a tag
- Press Backspace when the input is empty to remove the last tag
- Paste comma-separated values to add multiple tags at once
- Select from preset tag categories to quickly add common tags

## Project Structure

- `src/plugin/code.ts` - The plugin code that interacts with the Figma API
- `src/ui/` - React components for the plugin UI
  - `src/ui/components/TagInput.tsx` - Custom tag input component
  - `src/ui/components/TagEditor.tsx` - Editor for handling tag management
  - `src/ui/components/IconResult.tsx` - Displays individual icon results
  - `src/ui/components/App.tsx` - Main application component
- `dist/` - Built plugin files

## Optimization

The plugin automatically applies best practices for SVG export:

- Removes unnecessary attributes for cleaner SVGs
- Preserves important attributes for proper rendering
- Ensures compatibility with the SVGO optimization process in the generator

## Contributing

Contributions to improve the plugin are welcome! To contribute:

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly in Figma
5. Submit a pull request

## License

MIT
