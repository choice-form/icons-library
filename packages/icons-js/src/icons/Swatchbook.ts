import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * swatchbook icon
 */
const Swatchbook: Icon = {
  name: 'swatchbook',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5v9a2 2 0 1 0 4 0v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1"/><path d="M6.5 6.672 9.621 3.55a1 1 0 0 1 1.415 0l1.414 1.414a1 1 0 0 1 0 1.415l-6.95 6.95"/><path d="M9.5 9.5h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8M4.5 11.5h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Swatchbook;
