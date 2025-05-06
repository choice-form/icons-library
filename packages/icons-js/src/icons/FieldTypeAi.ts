import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeAi icon
 */
const FieldTypeAi: Icon = {
  name: 'field-type-ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      stroke: "#AB0A83",
      d: "M2.5 9.5a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" stroke="currentColor" d="M9.5 4.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2"/><path stroke="#AB0A83" d="M2.5 9.5a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeAi;
