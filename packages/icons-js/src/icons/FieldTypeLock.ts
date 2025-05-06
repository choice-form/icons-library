import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-type-lock icon
 */
const FieldTypeLock: Icon = {
  name: 'field-type-lock',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 7.5h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M5.5 7V5.5a2 2 0 1 1 4 0V7"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeLock;
