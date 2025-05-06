import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * swatchbook-ai icon
 */
const SwatchbookAi: Icon = {
  name: 'swatchbook-ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M2.5 2.5v9a2 2 0 1 0 4 0v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M6.5 6.672 9.621 3.55a1 1 0 0 1 1.415 0l1.414 1.414a1 1 0 0 1 0 1.415l-.293.293M8.5 13.5h-4M4.5 11.5h.005"/><path stroke="#AB0A83" d="M8.5 11.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SwatchbookAi;
