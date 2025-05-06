import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-row-height-tall icon
 */
const ToolbarRowHeightTall: Icon = {
  name: 'toolbar-row-height-tall',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2"/><path fill="currentColor" fill-opacity=".25" d="M12.5 2.5h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5h6m-1-3h-4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarRowHeightTall;
