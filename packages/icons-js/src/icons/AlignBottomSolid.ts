import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-bottom-solid icon
 */
const AlignBottomSolid: Icon = {
  name: 'align-bottom-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12.5h10"/><path fill="currentColor" d="M4.5 10.5v-8h2v8zM8.5 10.5v-5h2v5z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignBottomSolid;
