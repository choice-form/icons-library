import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-frame icon
 */
const ToolbarFrame: Icon = {
  name: 'toolbar-frame',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" d="M1.5 4.5h13m-13 7h13m-3-10v13m-7-13v13"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarFrame;
