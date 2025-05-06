import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-left icon
 */
const AlignLeft: Icon = {
  name: 'align-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 2.5v10m10-8h-8v2h8zm-3 4h-5v2h5z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignLeft;
