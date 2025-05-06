import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-ai icon
 */
const ToolbarAi: Icon = {
  name: 'toolbar-ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 10.5a5 5 0 0 0 5-5 5 5 0 0 0 5 5 5 5 0 0 0-5 5 5 5 0 0 0-5-5M9.5 3.5a3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0-3-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarAi;
