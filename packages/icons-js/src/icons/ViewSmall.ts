import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ViewSmall icon
 */
const ViewSmall: Icon = {
  name: 'view-small',
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
      d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.638 8.528a1.08 1.08 0 0 1 0-1.056C3.308 6.283 5.179 3.5 8 3.5s4.692 2.783 5.362 3.972a1.08 1.08 0 0 1 0 1.056C12.692 9.717 10.821 12.5 8 12.5S3.308 9.717 2.638 8.528"/><path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ViewSmall;
