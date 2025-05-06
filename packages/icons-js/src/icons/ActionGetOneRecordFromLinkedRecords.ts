import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ActionGetOneRecordFromLinkedRecords icon
 */
const ActionGetOneRecordFromLinkedRecords: Icon = {
  name: 'action-get-one-record-from-linked-records',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 7.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 5.5h4"/><path fill="currentColor" fill-opacity=".25" d="M10.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.5 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path d="M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 7.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionGetOneRecordFromLinkedRecords;
