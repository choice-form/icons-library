import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * CurvedArrowLeft icon
 */
const CurvedArrowLeft: Icon = {
  name: 'curved-arrow-left',
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
      d: "M6 6 2.5 9.5 6 13",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5H10a3.5 3.5 0 1 0 0-7H6.5"/><path d="M6 6 2.5 9.5 6 13"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CurvedArrowLeft;
