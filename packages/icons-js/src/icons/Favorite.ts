import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * favorite icon
 */
const Favorite: Icon = {
  name: 'favorite',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.64 4.4a2.836 2.836 0 0 0-4.148 0A3 3 0 0 0 8 5.116a3 3 0 0 0-.493-.716 2.84 2.84 0 0 0-4.148 0 3.185 3.185 0 0 0 0 4.351L8 13.5l4.64-4.748a3.18 3.18 0 0 0 0-4.352"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Favorite;
