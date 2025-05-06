import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-center-vertical icon
 */
const AlignCenterVertical: Icon = {
  name: 'align-center-vertical',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5h2m2 0v4h-2v-8h2zm0 0h2m0 0v-2h2v2m-2 0v2h2v-2m0 0h2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignCenterVertical;
