import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * gap-v icon
 */
const GapV: Icon = {
  name: 'gap-v',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5v2h-10v-2m0 10v-2h10v2"/><path stroke-opacity=".5" d="M10.5 7.5h-6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default GapV;
