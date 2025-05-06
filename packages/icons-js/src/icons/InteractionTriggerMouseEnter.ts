import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-trigger-mouse-enter icon
 */
const InteractionTriggerMouseEnter: Icon = {
  name: 'interaction-trigger-mouse-enter',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 5.5v-1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1m2-2h5m0 0-2-2m2 2-2 2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerMouseEnter;
