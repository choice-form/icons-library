import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * CurvedArrowRight icon
 */
const CurvedArrowRight: Icon = {
  name: 'curved-arrow-right',
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
      d: "M13.5 9.5H6a3.5 3.5 0 1 1 0-7h3.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10 6 3.5 3.5L10 13"/><path d="M13.5 9.5H6a3.5 3.5 0 1 1 0-7h3.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CurvedArrowRight;
