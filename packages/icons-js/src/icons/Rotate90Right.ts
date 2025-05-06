import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * rotate90-right icon
 */
const Rotate90Right: Icon = {
  name: 'rotate90-right',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M10.293 8.793 8.207 6.707a1 1 0 0 0-1.414 0L4.707 8.793a1 1 0 0 0 0 1.414l2.086 2.086a1 1 0 0 0 1.414 0l2.086-2.086a1 1 0 0 0 0-1.414ZM4.5 4.5l1.232-1.232a2.5 2.5 0 0 1 3.536 0L10.5 4.5"/><path stroke-linejoin="round" d="M10.5 2.5v2l-2 .5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Rotate90Right;
