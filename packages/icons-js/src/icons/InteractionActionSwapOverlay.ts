import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * InteractionActionSwapOverlay icon
 */
const InteractionActionSwapOverlay: Icon = {
  name: 'interaction-action-swap-overlay',
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
      d: "M2.5 7.5h10m-10 0L4 6M2.5 7.5 4 9m8.5-1.5L11 6m1.5 1.5L11 9M2.5 2.5h3a1 1 0 0 1 1 1v2m0 4v2a1 1 0 0 1-1 1h-3m6-7v-2a1 1 0 0 1 1-1h3m-4 7v2a1 1 0 0 0 1 1h3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5h10m-10 0L4 6M2.5 7.5 4 9m8.5-1.5L11 6m1.5 1.5L11 9M2.5 2.5h3a1 1 0 0 1 1 1v2m0 4v2a1 1 0 0 1-1 1h-3m6-7v-2a1 1 0 0 1 1-1h3m-4 7v2a1 1 0 0 0 1 1h3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionSwapOverlay;
