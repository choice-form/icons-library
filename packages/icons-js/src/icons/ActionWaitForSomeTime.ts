import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-wait-for-some-time icon
 */
const ActionWaitForSomeTime: Icon = {
  name: 'action-wait-for-some-time',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 8.5a5 5 0 1 1-5-5"/><path stroke-opacity=".25" d="M9.5 3.916A5.02 5.02 0 0 1 12.084 6.5"/><path d="M7.5 6.5v2l-2 2M7.5 3.5v-2m-2 0h4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionWaitForSomeTime;
