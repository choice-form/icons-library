import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * radius-tl icon
 */
const RadiusTl: Icon = {
  name: 'radius-tl',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" d="M11.5 3.5h-4a4 4 0 0 0-4 4v4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RadiusTl;
