import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * HugWidth icon
 */
const HugWidth: Icon = {
  name: 'hug-width',
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
      d: "M2.5 7.5h4m0 0-2-2m2 2-2 2m9-2h-4m0 0 2 2m-2-2 2-2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5h4m0 0-2-2m2 2-2 2m9-2h-4m0 0 2 2m-2-2 2-2"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default HugWidth;
