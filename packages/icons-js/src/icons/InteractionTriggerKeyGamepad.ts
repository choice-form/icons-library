import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-trigger-key-gamepad icon
 */
const InteractionTriggerKeyGamepad: Icon = {
  name: 'interaction-trigger-key-gamepad',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 2.5h-2a1 1 0 0 0-1 1v2h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-1-1"/><path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerKeyGamepad;
