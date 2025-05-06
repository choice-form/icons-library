import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-action-open-overlay icon
 */
const InteractionActionOpenOverlay: Icon = {
  name: 'interaction-action-open-overlay',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10.5 9.5h-2m1 1v-2"/><path d="M10.5 6.5v-3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionOpenOverlay;
