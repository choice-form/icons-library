import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FillColor icon
 */
const FillColor: Icon = {
  name: 'fill-color',
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
      "fill-opacity": ".25",
      d: "m3.5 2.5 3 3m7 7a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2m-6-11L2.207 6.793a1 1 0 0 0 0 1.414l4.086 4.086a1 1 0 0 0 1.414 0L13 7zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M13.5 12.5a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="m3.5 2.5 3 3m7 7a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2m-6-11L2.207 6.793a1 1 0 0 0 0 1.414l4.086 4.086a1 1 0 0 0 1.414 0L13 7zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FillColor;
