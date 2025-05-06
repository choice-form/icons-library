import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldDuplicate icon
 */
const FieldDuplicate: Icon = {
  name: 'field-duplicate',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-opacity": ".25",
      d: "M8.5 12.5v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1m6-4h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-opacity=".25" d="M8.5 10.5h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 12.5v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1m6-4h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldDuplicate;
