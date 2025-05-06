import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-trigger-on-click icon
 */
const InteractionTriggerOnClick: Icon = {
  name: 'interaction-trigger-on-click',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 2.5 5.5 4M4 5.5 2.5 5m6-1.5-1 1m-3 3-1 1M6 6l2.5 6.5 1-3 3-1z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerOnClick;
