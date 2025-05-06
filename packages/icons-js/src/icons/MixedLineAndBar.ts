import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * MixedLineAndBar icon
 */
const MixedLineAndBar: Icon = {
  name: 'mixed-line-and-bar',
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
      d: "M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m7-5v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8.5M6.5 3V2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1m0 5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8M5.5 6.5l2-2 3 3 3-3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m7-5v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8.5M6.5 3V2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1m0 5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8M5.5 6.5l2-2 3 3 3-3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MixedLineAndBar;
