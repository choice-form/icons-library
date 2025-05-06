import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-trigger-while-pressing icon
 */
const InteractionTriggerWhilePressing: Icon = {
  name: 'interaction-trigger-while-pressing',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427"/><path d="M6 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerWhilePressing;
