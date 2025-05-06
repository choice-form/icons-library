import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Cycle icon
 */
const Cycle: Icon = {
  name: 'cycle',
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
      d: "m5.5 2.5 2 2H6a3.5 3.5 0 1 0 0 7h.5M10.5 13.5l-2-2H10a3.5 3.5 0 1 0 0-7h-.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5.5 2.5 2 2H6a3.5 3.5 0 1 0 0 7h.5M10.5 13.5l-2-2H10a3.5 3.5 0 1 0 0-7h-.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Cycle;
