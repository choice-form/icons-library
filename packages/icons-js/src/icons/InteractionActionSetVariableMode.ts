import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-action-set-variable-mode icon
 */
const InteractionActionSetVariableMode: Icon = {
  name: 'interaction-action-set-variable-mode',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 10.5a2 2 0 0 1-4 0v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"/><path d="M10.35 8.5h1.15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6M5.5 10.5h.005"/><path d="m7.5 6 1.15-1.15a1.2 1.2 0 0 1 1.702.002l.948.948a1.2 1.2 0 0 1 .013 1.717L6.95 11.9"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionSetVariableMode;
