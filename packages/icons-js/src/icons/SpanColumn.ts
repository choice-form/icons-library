import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * span-column icon
 */
const SpanColumn: Icon = {
  name: 'span-column',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M7.5 2.5h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"/><path stroke-linecap="round" stroke-opacity=".5" d="M10.5 2.5h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1"/><path stroke-linecap="round" d="M4.5 11.5s1 1 3 1 3-1 3-1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SpanColumn;
