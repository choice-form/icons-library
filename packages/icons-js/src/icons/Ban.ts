import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Ban icon
 */
const Ban: Icon = {
  name: 'ban',
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
      d: "m4.111 11.889 7.778-7.778M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.111 11.889 7.778-7.778M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Ban;
