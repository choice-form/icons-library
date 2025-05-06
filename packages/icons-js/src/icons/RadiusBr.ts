import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * radius-br icon
 */
const RadiusBr: Icon = {
  name: 'radius-br',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" d="M4.5 12.5h4a4 4 0 0 0 4-4v-4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RadiusBr;
