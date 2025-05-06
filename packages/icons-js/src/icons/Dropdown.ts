import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * dropdown icon
 */
const Dropdown: Icon = {
  name: 'dropdown',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 6.5 7 9l2.5-2.5"/><path d="M1.5 2.5h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-11"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Dropdown;
