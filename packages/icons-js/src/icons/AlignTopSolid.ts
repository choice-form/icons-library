import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * align-top-solid icon
 */
const AlignTopSolid: Icon = {
  name: 'align-top-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-10"/><path fill="currentColor" d="M10.5 4.5v8h-2v-8zM6.5 4.5v5h-2v-5z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignTopSolid;
