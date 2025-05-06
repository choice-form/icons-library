import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FlipVertical icon
 */
const FlipVertical: Icon = {
  name: 'flip-vertical',
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
      d: "M12.5 7.5h-10m8-5-3 3-3-3zm-6 10 3-3 3 3z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 7.5h-10m8-5-3 3-3-3zm-6 10 3-3 3 3z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FlipVertical;
