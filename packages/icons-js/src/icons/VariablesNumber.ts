import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * variables-number icon
 */
const VariablesNumber: Icon = {
  name: 'variables-number',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M5.5 6.5H10m-5 2h4.5M7 5l-1 5m3-5-1 5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default VariablesNumber;
