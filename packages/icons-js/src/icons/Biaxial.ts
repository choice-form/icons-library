import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Biaxial icon
 */
const Biaxial: Icon = {
  name: 'biaxial',
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
      d: "M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m4-4H8a.5.5 0 0 0 .5-.5v-.5m-2-4V3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5m2.5 7h1a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M13.5 1.5l-8 8",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m4-4H8a.5.5 0 0 0 .5-.5v-.5m-2-4V3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5m2.5 7h1a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M13.5 1.5l-8 8"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Biaxial;
