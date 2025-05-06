import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * BorderL icon
 */
const BorderL: Icon = {
  name: 'border-l',
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
      d: "M4.5 12.5h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-7",
      "stroke-opacity": ".5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12.5v-10"/><path stroke-opacity=".5" d="M4.5 12.5h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-7"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BorderL;
