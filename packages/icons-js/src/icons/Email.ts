import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * email icon
 */
const Email: Icon = {
  name: 'email',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m1.5 5.5 5.553 2.776a1 1 0 0 0 .894 0L13.5 5.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Email;
