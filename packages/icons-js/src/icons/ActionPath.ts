import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-path icon
 */
const ActionPath: Icon = {
  name: 'action-path',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path fill="currentColor" fill-opacity=".25" d="M11.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M4.5 2.5h7m0 5h-6m-2-2v6a1 1 0 0 0 1 1h7"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionPath;
