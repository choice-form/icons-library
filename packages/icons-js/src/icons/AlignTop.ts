import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-top icon
 */
const AlignTop: Icon = {
  name: 'align-top',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 2.5h-10m8 10v-8h-2v8zm-4-3v-5h-2v5z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignTop;
