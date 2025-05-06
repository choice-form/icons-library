import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-row-height-short icon
 */
const ToolbarRowHeightShort: Icon = {
  name: 'toolbar-row-height-short',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2M7.5 3.5h6m-6 3h6m-6 3h6m-6 3h6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarRowHeightShort;
