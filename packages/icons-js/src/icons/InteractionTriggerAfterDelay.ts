import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-trigger-after-delay icon
 */
const InteractionTriggerAfterDelay: Icon = {
  name: 'interaction-trigger-after-delay',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 2.5h2m-1 6L9 7m2.5 1.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerAfterDelay;
