import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * chat icon
 */
const Chat: Icon = {
  name: 'chat',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 4v5A1.5 1.5 0 0 0 4 10.5h2l2 3 2-3h2A1.5 1.5 0 0 0 13.5 9V4A1.5 1.5 0 0 0 12 2.5H4A1.5 1.5 0 0 0 2.5 4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Chat;
