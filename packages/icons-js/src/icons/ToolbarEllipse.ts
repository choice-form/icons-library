import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-ellipse icon
 */
const ToolbarEllipse: Icon = {
  name: 'toolbar-ellipse',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarEllipse;
