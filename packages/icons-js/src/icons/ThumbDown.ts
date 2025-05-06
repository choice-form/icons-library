import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * thumb-down icon
 */
const ThumbDown: Icon = {
  name: 'thumb-down',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 2.5h-2v5h2M4.5 7.5l2 6H7A1.5 1.5 0 0 0 8.5 12V9.5h3.27a1.5 1.5 0 0 0 1.485-1.712l-.571-4A1.5 1.5 0 0 0 11.2 2.5H4.5z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ThumbDown;
