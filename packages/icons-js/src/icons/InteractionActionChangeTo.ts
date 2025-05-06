import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-action-change-to icon
 */
const InteractionActionChangeTo: Icon = {
  name: 'interaction-action-change-to',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 8A4.5 4.5 0 0 1 8 3.5a4.88 4.88 0 0 1 3.37 1.37L12.5 6m0 0V3.5m0 2.5H10m2.5 2A4.5 4.5 0 0 1 8 12.5a4.88 4.88 0 0 1-3.37-1.37L3.5 10m0 0H6m-2.5 0v2.5"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionChangeTo;
