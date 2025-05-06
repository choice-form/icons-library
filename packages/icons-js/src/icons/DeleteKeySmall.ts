import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * delete-key-small icon
 */
const DeleteKeySmall: Icon = {
  name: 'delete-key-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5H6.5L2.5 8l4 4.5H12a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 12 3.5"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DeleteKeySmall;
