import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * resize-x-small icon
 */
const ResizeXSmall: Icon = {
  name: 'resize-x-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9.5 10 2-2-2-2M6.5 10l-2-2 2-2M13.5 13.5v-11M2.5 13.5v-11"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ResizeXSmall;
