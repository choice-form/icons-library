import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Support icon
 */
const Support: Icon = {
  name: 'support',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-opacity": ".25",
      d: "M5.379 5.379a3 3 0 0 0 0 4.242l-2.122 2.122a6 6 0 0 1 0-8.486zM9.621 9.621a3 3 0 0 0 0-4.242l2.122-2.122a6 6 0 0 1 0 8.486z",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-opacity=".25" d="M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.379 5.379a3 3 0 0 0 0 4.242l-2.122 2.122a6 6 0 0 1 0-8.486zM9.621 9.621a3 3 0 0 0 0-4.242l2.122-2.122a6 6 0 0 1 0 8.486z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Support;
