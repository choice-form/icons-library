import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * empty-no-authority icon
 */
const EmptyNoAuthority: Icon = {
  name: 'empty-no-authority',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5h-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4.5 6.5v-2a3 3 0 0 1 6 0v2"/><path fill="currentColor" fill-opacity=".25" d="M6.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5v2m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyNoAuthority;
