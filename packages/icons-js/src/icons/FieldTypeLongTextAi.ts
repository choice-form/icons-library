import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-long-text-ai icon
 */
const FieldTypeLongTextAi: Icon = {
  name: 'field-type-long-text-ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M3 5.5h3M8.5 2.5h4m-4 3h4m-10 4h3m-3 3h3M2.5 6.5l2-4 2 4"/><path stroke="#AB0A83" d="M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeLongTextAi;
