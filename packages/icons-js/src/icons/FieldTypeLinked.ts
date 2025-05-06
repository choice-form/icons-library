import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-linked icon
 */
const FieldTypeLinked: Icon = {
  name: 'field-type-linked',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 3.5h9m-9 8h9m-3-4h3M2.5 7.5h5m0 0-2-2m2 2-2 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeLinked;
