import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ColorOpacity icon
 */
const ColorOpacity: Icon = {
  name: 'color-opacity',
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
      d: "M3 3h3v3H3zM9 3h3v3H9zM6 6h3v3H6zM3 9h3v3H3zM9 9h3v3H9z",
      "fill-opacity": ".5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".5" d="M3 3h3v3H3zM9 3h3v3H9zM6 6h3v3H6zM3 9h3v3H3zM9 9h3v3H9z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ColorOpacity;
