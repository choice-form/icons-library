import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-get-one-record-from-a-datasheet icon
 */
const ActionGetOneRecordFromADatasheet: Icon = {
  name: 'action-get-one-record-from-a-datasheet',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 7.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1M6.5 5.5h8"/><path fill="currentColor" fill-opacity=".25" d="M6.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path d="M8.5 10.5h2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionGetOneRecordFromADatasheet;
