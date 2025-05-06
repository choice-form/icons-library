import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-right-solid icon
 */
const AlignRightSolid: Icon = {
  name: 'align-right-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 12.5v-10"/><path fill="currentColor" d="M10.5 6.5h-8v-2h8zM10.5 10.5h-5v-2h5z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignRightSolid;
