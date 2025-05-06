import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ThumbUp icon
 */
const ThumbUp: Icon = {
  name: 'thumb-up',
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
      d: "M4.5 13.5h-2v-5h2M4.5 8.5l2-6H7A1.5 1.5 0 0 1 8.5 4v2.5h3.27a1.5 1.5 0 0 1 1.485 1.712l-.571 4A1.5 1.5 0 0 1 11.2 13.5H4.5z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 13.5h-2v-5h2M4.5 8.5l2-6H7A1.5 1.5 0 0 1 8.5 4v2.5h3.27a1.5 1.5 0 0 1 1.485 1.712l-.571 4A1.5 1.5 0 0 1 11.2 13.5H4.5z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ThumbUp;
