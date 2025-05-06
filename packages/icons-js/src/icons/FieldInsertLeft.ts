import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-insert-left icon
 */
const FieldInsertLeft: Icon = {
  name: 'field-insert-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m1.5 10.5 2-2m0 0 2 2m-2-2v3a2 2 0 0 0 2 2h2"/><path fill="currentColor" fill-opacity=".25" d="M9.5 12.5v-10a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1"/><path d="M1.5 3.5h4m-2 2v-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldInsertLeft;
