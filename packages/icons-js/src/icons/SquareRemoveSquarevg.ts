import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * square-remove-squarevg icon
 */
const SquareRemoveSquarevg: Icon = {
  name: 'square-remove-squarevg',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5M10.121 5.879l-4.242 4.242M5.879 5.879l4.242 4.242"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SquareRemoveSquarevg;
