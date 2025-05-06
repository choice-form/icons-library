import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * CogwheelSmall icon
 */
const CogwheelSmall: Icon = {
  name: 'cogwheel-small',
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
      d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8.9V7.1l-1.668-.185a4 4 0 0 0-.355-.857l1.049-1.311-1.273-1.273-1.311 1.049a4 4 0 0 0-.857-.355L8.9 2.5H7.1l-.185 1.668a4 4 0 0 0-.857.355L4.747 3.474 3.474 4.747l1.049 1.311c-.151.27-.27.559-.355.857L2.5 7.1v1.8l1.668.185q.128.449.355.857l-1.049 1.311 1.273 1.272 1.311-1.048c.27.151.559.27.857.355L7.1 13.5h1.8l.185-1.668q.449-.128.857-.355l1.311 1.048 1.273-1.272-1.049-1.311c.151-.27.27-.559.355-.857z"/><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CogwheelSmall;
