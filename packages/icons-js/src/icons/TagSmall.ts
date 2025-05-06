import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * tag-small icon
 */
const TagSmall: Icon = {
  name: 'tag-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 2.5h5l5.561 5.561a1.5 1.5 0 0 1 0 2.121l-2.879 2.879a1.5 1.5 0 0 1-2.121 0L2.5 7.5z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TagSmall;
