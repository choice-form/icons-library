import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RecordEdit icon
 */
const RecordEdit: Icon = {
  name: 'record-edit',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-opacity": ".25",
      d: "M7.5 8.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3m8-10v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M7.5 14.5l1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5z",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-opacity=".25" d="M1.5 4.5v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3m8-10v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M7.5 14.5l1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordEdit;
