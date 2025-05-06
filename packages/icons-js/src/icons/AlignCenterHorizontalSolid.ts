import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-center-horizontal-solid icon
 */
const AlignCenterHorizontalSolid: Icon = {
  name: 'align-center-horizontal-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 2.5v2m0 2v2m0 2v2"/><path fill="currentColor" d="M3.5 4.5h8v2h-8zM5.5 10.5v-2h4v2z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignCenterHorizontalSolid;
