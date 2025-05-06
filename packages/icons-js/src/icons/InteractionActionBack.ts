import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * InteractionActionBack icon
 */
const InteractionActionBack: Icon = {
  name: 'interaction-action-back',
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
      d: "m4.5 4.5-2 2m0 0 2 2m-2-2h7a2 2 0 1 1 0 4H9",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5-2 2m0 0 2 2m-2-2h7a2 2 0 1 1 0 4H9"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionBack;
