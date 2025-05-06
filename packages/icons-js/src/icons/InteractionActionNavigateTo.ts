import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * interaction-action-navigate-to icon
 */
const InteractionActionNavigateTo: Icon = {
  name: 'interaction-action-navigate-to',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 7.5h-10m10 0-3-3m3 3-3 3"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionActionNavigateTo;
