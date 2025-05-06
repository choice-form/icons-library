import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeFormula icon
 */
const FieldTypeFormula: Icon = {
  name: 'field-type-formula',
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
      d: "M11.5 2.5H9.988a2 2 0 0 0-1.916 1.425l-2.144 7.15A2 2 0 0 1 4.012 12.5H2.5M3.5 6.5h7M12.5 12.5l-3-3m3 0-3 3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5H9.988a2 2 0 0 0-1.916 1.425l-2.144 7.15A2 2 0 0 1 4.012 12.5H2.5M3.5 6.5h7M12.5 12.5l-3-3m3 0-3 3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeFormula;
