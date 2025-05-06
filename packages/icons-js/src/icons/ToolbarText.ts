import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-text icon
 */
const ToolbarText: Icon = {
  name: 'toolbar-text',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 1.5h12M8 1.5v13"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarText;
