import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-left-solid icon
 */
const AlignLeftSolid: Icon = {
  name: 'align-left-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5v10"/><path fill="currentColor" d="M4.5 4.5h8v2h-8zM4.5 8.5h5v2h-5z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignLeftSolid;
