import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-get-records-from-a-node icon
 */
const ActionGetRecordsFromANode: Icon = {
  name: 'action-get-records-from-a-node',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 12.5h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7m-8-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionGetRecordsFromANode;
