import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-select-ai icon
 */
const FieldTypeSelectAi: Icon = {
  name: 'field-type-select-ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M4.5 2.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.5M8.5 4.5h4M5.5 8.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2.5"/><path stroke="currentColor" d="m4 4 1 1 2-2"/><path stroke="#AB0A83" d="M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeSelectAi;
