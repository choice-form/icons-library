import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FormatRight icon
 */
const FormatRight: Icon = {
  name: 'format-right',
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
      d: "m10.5 5 3 3-3 3M13.5 8h-7M2.5 3.5h6M2.5 12.5h6M2.5 9.5h2M2.5 6.5h2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 5 3 3-3 3M13.5 8h-7M2.5 3.5h6M2.5 12.5h6M2.5 9.5h2M2.5 6.5h2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FormatRight;
