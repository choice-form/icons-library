import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-linked-ai icon
 */
const FieldTypeLinkedAi: Icon = {
  name: 'field-type-linked-ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M3.5 3.5h9m-9 8h2M2.5 7.5h5m0 0-2-2m2 2-2 2"/><path stroke="#AB0A83" d="M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeLinkedAi;
