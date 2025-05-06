import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-ai icon
 */
const FieldTypeAi: Icon = {
  name: 'field-type-ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" stroke="currentColor" d="M9.5 4.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2"/><path stroke="#AB0A83" d="M2.5 9.5a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeAi;
