import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TransactionSmall icon
 */
const TransactionSmall: Icon = {
  name: 'transaction-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m10.5 13.5 3-3-3-3M13.5 10.5h-6M5.5 2.5l-3 3 3 3M2.5 5.5h6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 13.5 3-3-3-3M13.5 10.5h-6M5.5 2.5l-3 3 3 3M2.5 5.5h6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TransactionSmall;
