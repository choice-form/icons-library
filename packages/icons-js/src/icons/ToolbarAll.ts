import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-all icon
 */
const ToolbarAll: Icon = {
  name: 'toolbar-all',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5h12m-12 5h8m-8 5h4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarAll;
