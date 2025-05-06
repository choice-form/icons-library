import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WarningCircle icon
 */
const WarningCircle: Icon = {
  name: 'warning-circle',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M7.5 10.5h.005",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/><path stroke-linecap="round" d="M7.5 4.5v4"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5h.005"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningCircle;
