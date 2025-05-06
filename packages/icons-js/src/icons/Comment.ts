import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Comment icon
 */
const Comment: Icon = {
  name: 'comment',
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
      d: "M13.5 7.267C13.5 4.634 11.037 2.5 8 2.5S2.5 4.634 2.5 7.267s2.463 4.766 5.5 4.766a6.4 6.4 0 0 0 1.123-.1L12 13.5v-3a4.46 4.46 0 0 0 1.5-3.233",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.267C13.5 4.634 11.037 2.5 8 2.5S2.5 4.634 2.5 7.267s2.463 4.766 5.5 4.766a6.4 6.4 0 0 0 1.123-.1L12 13.5v-3a4.46 4.46 0 0 0 1.5-3.233"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Comment;
