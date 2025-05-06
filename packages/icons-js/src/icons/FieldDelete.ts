import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-delete icon
 */
const FieldDelete: Icon = {
  name: 'field-delete',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 10.5h-4M9.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0M3.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m4 9h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldDelete;
