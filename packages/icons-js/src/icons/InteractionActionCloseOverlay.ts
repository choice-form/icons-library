import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-action-close-overlay icon
 */
const InteractionActionCloseOverlay: Icon = {
  name: 'interaction-action-close-overlay',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M6 6l3 3m0-3L6 9"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionCloseOverlay;
