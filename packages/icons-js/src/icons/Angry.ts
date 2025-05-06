import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Angry icon
 */
const Angry: Icon = {
  name: 'angry',
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
      d: "M10 9.5H6a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3M4.5 5.5l2 1M11.5 5.5l-2 1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"/><path d="M10 9.5H6a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3M4.5 5.5l2 1M11.5 5.5l-2 1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Angry;
