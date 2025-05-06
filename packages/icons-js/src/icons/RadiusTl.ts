import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RadiusTl icon
 */
const RadiusTl: Icon = {
  name: 'radius-tl',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M11.5 3.5h-4a4 4 0 0 0-4 4v4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" d="M11.5 3.5h-4a4 4 0 0 0-4 4v4"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RadiusTl;
