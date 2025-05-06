import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-bottom icon
 */
const AlignBottom: Icon = {
  name: 'align-bottom',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 12.5h10m-8-10v8h2v-8zm4 3v5h2v-5z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignBottom;
