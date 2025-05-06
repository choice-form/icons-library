import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * table icon
 */
const Table: Icon = {
  name: 'table',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M1.5 5.5h12m-8 0v8m-4-4h12m-4-4v8"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Table;
