import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-select icon
 */
const ToolbarSelect: Icon = {
  name: 'toolbar-select',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1 1 5.822 14L8.89 8.914 15 6.822z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarSelect;
