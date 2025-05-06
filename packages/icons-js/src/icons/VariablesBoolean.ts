import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * variables-boolean icon
 */
const VariablesBoolean: Icon = {
  name: 'variables-boolean',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4.5H6a3.5 3.5 0 1 0 0 7h3a3.5 3.5 0 1 0 0-7"/><path d="M4.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default VariablesBoolean;
