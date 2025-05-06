import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ColorAlpha icon
 */
const ColorAlpha: Icon = {
  name: 'color-alpha',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M3.964 11.036a5 5 0 1 0 7.072-7.072L7.5 7.5z",
      "fill-opacity": ".5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" d="M7.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path fill="currentColor" fill-opacity=".5" d="M3.964 11.036a5 5 0 1 0 7.072-7.072L7.5 7.5z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ColorAlpha;
