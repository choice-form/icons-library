import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeLinked icon
 */
const FieldTypeLinked: Icon = {
  name: 'field-type-linked',
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
      d: "M3.5 3.5h9m-9 8h9m-3-4h3M2.5 7.5h5m0 0-2-2m2 2-2 2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 3.5h9m-9 8h9m-3-4h3M2.5 7.5h5m0 0-2-2m2 2-2 2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeLinked;
