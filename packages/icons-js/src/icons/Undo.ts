import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * undo icon
 */
const Undo: Icon = {
  name: 'undo',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.5v3h3"/><path d="M12.5 10.5A4.5 4.5 0 0 0 8 6a4.5 4.5 0 0 0-3 1.15L3.5 8.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Undo;
