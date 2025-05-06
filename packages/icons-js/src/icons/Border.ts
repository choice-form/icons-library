import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * border icon
 */
const Border: Icon = {
  name: 'border',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 3.5h10"/><path fill="currentColor" d="M12.5 6.5h-10v1h10zM12.5 10.5h-10v2h10z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5h-10v1h10zM12.5 10.5h-10v2h10z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Border;
