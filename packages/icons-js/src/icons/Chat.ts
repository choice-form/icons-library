import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Chat icon
 */
const Chat: Icon = {
  name: 'chat',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.5 4v5A1.5 1.5 0 0 0 4 10.5h2l2 3 2-3h2A1.5 1.5 0 0 0 13.5 9V4A1.5 1.5 0 0 0 12 2.5H4A1.5 1.5 0 0 0 2.5 4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 4v5A1.5 1.5 0 0 0 4 10.5h2l2 3 2-3h2A1.5 1.5 0 0 0 13.5 9V4A1.5 1.5 0 0 0 12 2.5H4A1.5 1.5 0 0 0 2.5 4"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Chat;
