import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ActionGetRecordsFromLinkedRecords icon
 */
const ActionGetRecordsFromLinkedRecords: Icon = {
  name: 'action-get-records-from-linked-records',
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
      d: "M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 12.5v1a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0 5v-1",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 5.5h4M10.5 10.5h4"/><path fill="currentColor" fill-opacity=".25" d="M8.5 4.5h2v2h-2zM8.5 9.5h2v2h-2z"/><path d="M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 12.5v1a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0 5v-1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionGetRecordsFromLinkedRecords;
