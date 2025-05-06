import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-get-records-from-linked-records icon
 */
const ActionGetRecordsFromLinkedRecords: Icon = {
  name: 'action-get-records-from-linked-records',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 5.5h4M10.5 10.5h4"/><path fill="currentColor" fill-opacity=".25" d="M8.5 4.5h2v2h-2zM8.5 9.5h2v2h-2z"/><path d="M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 12.5v1a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0 5v-1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionGetRecordsFromLinkedRecords;
