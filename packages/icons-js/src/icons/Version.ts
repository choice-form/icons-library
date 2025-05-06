import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Version icon
 */
const Version: Icon = {
  name: 'version',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linejoin": "round",
      d: "m1.5 7.5 6 3 6-3M1.5 10.5l6 3 6-3",
      "stroke-linecap": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linejoin="round"><path d="m7.5 1.5-6 3 6 3 6-3z"/><path stroke-linecap="round" d="m1.5 7.5 6 3 6-3M1.5 10.5l6 3 6-3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Version;
