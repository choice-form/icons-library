import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * alignment-center icon
 */
const AlignmentCenter: Icon = {
  name: 'alignment-center',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 3.5h-12m9 4h-6m9 4h-12"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignmentCenter;
