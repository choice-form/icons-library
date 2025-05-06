import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-url icon
 */
const FieldTypeUrl: Icon = {
  name: 'field-type-url',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 4 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828L9.207 8.793a1 1 0 0 1-1.414 0L7 8m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L8 7"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeUrl;
