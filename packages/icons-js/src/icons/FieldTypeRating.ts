import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeRating icon
 */
const FieldTypeRating: Icon = {
  name: 'field-type-rating',
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
      d: "m7.5 2.5 1.545 3.13 3.455.505L10 8.57l.59 3.44-3.09-1.625-3.09 1.625L5 8.57 2.5 6.135l3.455-.505z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 2.5 1.545 3.13 3.455.505L10 8.57l.59 3.44-3.09-1.625-3.09 1.625L5 8.57 2.5 6.135l3.455-.505z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeRating;
