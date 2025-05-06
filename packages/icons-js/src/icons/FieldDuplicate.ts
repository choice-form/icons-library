import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-duplicate icon
 */
const FieldDuplicate: Icon = {
  name: 'field-duplicate',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-opacity=".25" d="M8.5 10.5h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 12.5v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1m6-4h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldDuplicate;
