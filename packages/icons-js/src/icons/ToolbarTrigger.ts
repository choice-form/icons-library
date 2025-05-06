import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-trigger icon
 */
const ToolbarTrigger: Icon = {
  name: 'toolbar-trigger',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0M5.5 5.5h2m0 0h2m-2 0v5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarTrigger;
