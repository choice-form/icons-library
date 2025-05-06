import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * gap-h icon
 */
const GapH: Icon = {
  name: 'gap-h',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5h2v10h-2m10 0h-2v-10h2"/><path stroke-opacity=".5" d="M7.5 4.5v6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default GapH;
