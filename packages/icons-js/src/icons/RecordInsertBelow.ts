import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * record-insert-below icon
 */
const RecordInsertBelow: Icon = {
  name: 'record-insert-below',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 14.5 2-2m0 0-2-2m2 2h-3a2 2 0 0 1-2-2v-2"/><path fill="currentColor" fill-opacity=".25" d="M12.5 5.5h-10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1"/><path d="M13.5 12.5h-4m2 2v-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordInsertBelow;
