import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-attachment icon
 */
const FieldTypeAttachment: Icon = {
  name: 'field-type-attachment',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 2.5h.086a1 1 0 0 1 .707.293l1.914 1.914a1 1 0 0 1 .293.707V5.5m-3-3h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6m-3-3V5a.5.5 0 0 0 .5.5h2.5"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeAttachment;
