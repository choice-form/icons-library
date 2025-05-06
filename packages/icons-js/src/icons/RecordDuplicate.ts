import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RecordDuplicate icon
 */
const RecordDuplicate: Icon = {
  name: 'record-duplicate',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-opacity": ".25",
      d: "M3.5 7.5h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1m4-6v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-opacity=".25" d="M5.5 7.5v-3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 7.5h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1m4-6v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordDuplicate;
