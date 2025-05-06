import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * extensions icon
 */
const Extensions: Icon = {
  name: 'extensions',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-opacity=".25" d="M14 8 8 2a.707.707 0 0 0-1 1l.5.5-1.586 1.586a2 2 0 0 0 0 2.828l2.172 2.172a2 2 0 0 0 2.828 0L12.5 8.5l.5.5a.707.707 0 1 0 1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 5.5 2 2M7 3a.707.707 0 0 1 1-1l6 6a.707.707 0 0 1-1 1l-.5-.5-1.586 1.586a2 2 0 0 1-2.828 0L5.914 7.914a2 2 0 0 1 0-2.828L7.5 3.5zM7 9l-3 3m5.5-8.5 2-2m3 3-2 2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 2.5h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Extensions;
