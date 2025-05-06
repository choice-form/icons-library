import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-trigger-on-drag icon
 */
const InteractionTriggerOnDrag: Icon = {
  name: 'interaction-trigger-on-drag',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 2.5-2 2m2-2h-2m2 0v2m-5 3-2 2m0 0v-2m0 2h2m0-5-2-2m0 0v2m0-2h2M6 6l2.5 6.5 1-3 3-1z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerOnDrag;
