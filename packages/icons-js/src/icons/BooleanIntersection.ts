import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * BooleanIntersection icon
 */
const BooleanIntersection: Icon = {
  name: 'boolean-intersection',
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
      d: "M6.5 5.5h3v3a1 1 0 0 1-1 1h-3v-3a1 1 0 0 1 1-1",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-2v3a1 1 0 0 1-1 1h-3v2a1 1 0 0 0 1 1"/><path d="M8.5 2.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h3v-2a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M6.5 5.5h3v3a1 1 0 0 1-1 1h-3v-3a1 1 0 0 1 1-1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BooleanIntersection;
