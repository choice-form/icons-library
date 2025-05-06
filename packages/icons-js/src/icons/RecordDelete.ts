import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * record-delete icon
 */
const RecordDelete: Icon = {
  name: 'record-delete',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.5 10.5h-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordDelete;
