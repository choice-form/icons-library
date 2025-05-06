import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeUrl icon
 */
const FieldTypeUrl: Icon = {
  name: 'field-type-url',
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
      d: "m8 4 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828L9.207 8.793a1 1 0 0 1-1.414 0L7 8m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L8 7",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 4 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828L9.207 8.793a1 1 0 0 1-1.414 0L7 8m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L8 7"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeUrl;
