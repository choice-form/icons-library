import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * delete-small icon
 */
const DeleteSmall: Icon = {
  name: 'delete-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 8h10"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DeleteSmall;
