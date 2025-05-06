import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * form-delete icon
 */
const FormDelete: Icon = {
  name: 'form-delete',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 7.5h1m-1 4h1M7.5 10.5h-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/><path fill="currentColor" fill-opacity=".25" d="m14.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5h-4a1 1 0 0 0-1 1v2m5-3 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v8a1 1 0 0 1-1 1h-3"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FormDelete;
