import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-polygon icon
 */
const ToolbarPolygon: Icon = {
  name: 'toolbar-polygon',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 1.5-7.5 13h15z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarPolygon;
