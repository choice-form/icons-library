import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * System icon
 */
const System: Icon = {
  name: 'system',
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
      d: "M13.5 7.5s-1 2-6 2-6-2-6-2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 3.5s1 2 6 2 6-2 6-2-1-2-6-2-6 2-6 2"/><path d="M13.5 3.5v8s-1 2-6 2-6-2-6-2v-8"/><path d="M13.5 7.5s-1 2-6 2-6-2-6-2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default System;
