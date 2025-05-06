import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-pen-tool icon
 */
const ToolbarPenTool: Icon = {
  name: 'toolbar-pen-tool',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M.5 15.5l5.44-5.44M7.5.5l8 8"/><path d="m13.5 6.5-2 7-11 2 2-11 7-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarPenTool;
