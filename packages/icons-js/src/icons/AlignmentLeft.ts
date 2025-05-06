import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * alignment-left icon
 */
const AlignmentLeft: Icon = {
  name: 'alignment-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 3.5h12m-12 4h9m-9 4h6"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignmentLeft;
