import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-rectangle icon
 */
const ToolbarRectangle: Icon = {
  name: 'toolbar-rectangle',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5.5h-13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarRectangle;
