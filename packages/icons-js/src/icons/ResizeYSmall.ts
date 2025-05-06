import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * resize-y-small icon
 */
const ResizeYSmall: Icon = {
  name: 'resize-y-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10 6.5-2-2-2 2M10 9.5l-2 2-2-2M13.5 2.5h-11M13.5 13.5h-11"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ResizeYSmall;
