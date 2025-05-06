import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-action icon
 */
const ToolbarAction: Icon = {
  name: 'toolbar-action',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 7.5 3 6l3.5-3.5-1.25 4.75L7.5 8.5 6 10l-3.5 3.5 1.25-4.75zM9.5 13.5l2-5 2 5M10 12.5h3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarAction;
