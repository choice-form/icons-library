import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-get-records-from-a-datasheet icon
 */
const ActionGetRecordsFromADatasheet: Icon = {
  name: 'action-get-records-from-a-datasheet',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 12.5v1a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0 4v1M6.5 5.5h8m-6 5h6"/><path fill="currentColor" fill-opacity=".25" d="M4.5 4.5h2v2h-2zM4.5 9.5h2v2h-2z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionGetRecordsFromADatasheet;
