import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Options icon
 */
const Options: Icon = {
  name: 'options',
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
      d: "M8 10.5H3M5.5 13.5v-3M5.5 8.5v-6M13 5.5H8M10.5 2.5v3M10.5 7.5v6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 10.5H3M5.5 13.5v-3M5.5 8.5v-6M13 5.5H8M10.5 2.5v3M10.5 7.5v6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Options;
