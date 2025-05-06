import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * transaction-small icon
 */
const TransactionSmall: Icon = {
  name: 'transaction-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 13.5 3-3-3-3M13.5 10.5h-6M5.5 2.5l-3 3 3 3M2.5 5.5h6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TransactionSmall;
