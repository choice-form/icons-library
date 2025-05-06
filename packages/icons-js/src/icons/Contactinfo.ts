import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * contactinfo icon
 */
const Contactinfo: Icon = {
  name: 'contactinfo',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M11.5 12.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1"/><path fill="currentColor" fill-opacity=".25" stroke-linecap="round" stroke-linejoin="round" d="M8 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Contactinfo;
