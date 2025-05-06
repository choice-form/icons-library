import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-trigger-mouse-down icon
 */
const InteractionTriggerMouseDown: Icon = {
  name: 'interaction-trigger-mouse-down',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427M7.5 6v3.5m0 0L9 8M7.5 9.5 6 8M9 3l-.5 1M6 3l.5 1M10 5.5l1-.5m-6 .5L4 5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerMouseDown;
