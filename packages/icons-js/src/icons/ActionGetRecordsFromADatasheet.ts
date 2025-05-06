import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ActionGetRecordsFromADatasheet icon
 */
const ActionGetRecordsFromADatasheet: Icon = {
  name: 'action-get-records-from-a-datasheet',
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
      d: "M4.5 4.5h2v2h-2zM4.5 9.5h2v2h-2z",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 12.5v1a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0 4v1M6.5 5.5h8m-6 5h6"/><path fill="currentColor" fill-opacity=".25" d="M4.5 4.5h2v2h-2zM4.5 9.5h2v2h-2z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionGetRecordsFromADatasheet;
