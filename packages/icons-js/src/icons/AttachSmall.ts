import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * attach-small icon
 */
const AttachSmall: Icon = {
  name: 'attach-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.654 5.982 6.36 8.277a1.335 1.335 0 1 0 1.889 1.889l3.1-3.1A2.673 2.673 0 0 0 7.57 3.287L4.2 6.657a4.009 4.009 0 0 0 5.669 5.669l3.1-3.1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AttachSmall;
