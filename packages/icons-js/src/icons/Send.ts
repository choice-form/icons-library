import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * send icon
 */
const Send: Icon = {
  name: 'send',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.045V12.5l1.859-2.272M4.5 9.045l9-7.545m-9 7.545 1.859 1.183m0 0L11.5 13.5l2-12m0 0L1.5 7 3 8"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Send;
