import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-notification icon
 */
const ActionNotification: Icon = {
  name: 'action-notification',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.151 10.401.717 1.425a1.151 1.151 0 0 1-2.047 1.048L3.576 8.5"/><path d="M11.5 10.5s-2.952-2-4.976-2H3.5a2 2 0 1 1 0-4h3.024c1.976 0 4.976-2 4.976-2zM11.5 4.5a2 2 0 1 1 0 4"/><path stroke-opacity=".25" d="M9.5 5.5v2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionNotification;
