import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeSystemId icon
 */
const FieldTypeSystemId: Icon = {
  name: 'field-type-system-id',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      stroke: "currentColor",
      d: "M11.5 4c0 .828-2.015 1.5-4.5 1.5S2.5 4.828 2.5 4m9 0c0-.828-2.015-1.5-4.5-1.5S2.5 3.172 2.5 4m9 0v1.5M2.5 4v3.5m0 0V11c-.003.24.168.478.498.691.33.214.809.399 1.397.538.588.14 1.268.23 1.982.262.715.034 1.443.01 2.123-.071m-6-4.92c1.5 1 4.219 1.178 6 1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke-linecap="round" stroke-linejoin="round"><path stroke="#05F" d="M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/><path stroke="currentColor" d="M11.5 4c0 .828-2.015 1.5-4.5 1.5S2.5 4.828 2.5 4m9 0c0-.828-2.015-1.5-4.5-1.5S2.5 3.172 2.5 4m9 0v1.5M2.5 4v3.5m0 0V11c-.003.24.168.478.498.691.33.214.809.399 1.397.538.588.14 1.268.23 1.982.262.715.034 1.443.01 2.123-.071m-6-4.92c1.5 1 4.219 1.178 6 1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeSystemId;
