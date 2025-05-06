import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * InteractionActionConditional icon
 */
const InteractionActionConditional: Icon = {
  name: 'interaction-action-conditional',
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
      d: "m3.5 10.5 2 2m0-2-2 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 8.5v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1m-3-5v3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3.5 10.5 2 2m0-2-2 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 8.5v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1m-3-5v3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionConditional;
