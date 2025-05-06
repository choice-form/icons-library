import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Divider icon
 */
const Divider: Icon = {
  name: 'divider',
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
      d: "M1.5 3.5h2m3 0h2m3 0h2M1.5 11.5h2m3 0h2m3 0h2M1.5 7.5h12",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 3.5h2m3 0h2m3 0h2M1.5 11.5h2m3 0h2m3 0h2M1.5 7.5h12"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Divider;
