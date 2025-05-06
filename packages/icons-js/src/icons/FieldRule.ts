import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldRule icon
 */
const FieldRule: Icon = {
  name: 'field-rule',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-opacity": ".25",
      d: "M8.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m-11-2v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M9.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M14.5 14.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-opacity=".25" d="M5.5 12.5v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m-11-2v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M9.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M14.5 14.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldRule;
