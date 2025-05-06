import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * InteractionActionScrollTo icon
 */
const InteractionActionScrollTo: Icon = {
  name: 'interaction-action-scroll-to',
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
      d: "M7.5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 0v7m4-3a5 5 0 0 1-8 0m3-2h2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 0v7m4-3a5 5 0 0 1-8 0m3-2h2"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionScrollTo;
