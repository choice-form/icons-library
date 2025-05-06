import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * send-message-small icon
 */
const SendMessageSmall: Icon = {
  name: 'send-message-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 8.5-5-2 11-4-4 11zm0 0 2-2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SendMessageSmall;
