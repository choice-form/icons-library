import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ScrollingWords icon
 */
const ScrollingWords: Icon = {
  name: 'scrolling-words',
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
      d: "M3.5 4.5h8m-8 3h4m2 0h2m-8 3h6m-7 2h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h8m-8 3h4m2 0h2m-8 3h6m-7 2h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ScrollingWords;
