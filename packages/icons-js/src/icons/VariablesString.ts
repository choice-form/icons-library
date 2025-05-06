import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * variables-string icon
 */
const VariablesString: Icon = {
  name: 'variables-string',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path d="M5.5 6.5v-1h2m0 0h2v1m-2-1v4m-1 0h2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default VariablesString;
