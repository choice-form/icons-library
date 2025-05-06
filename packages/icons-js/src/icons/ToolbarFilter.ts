import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-filter icon
 */
const ToolbarFilter: Icon = {
  name: 'toolbar-filter',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 2.5h12m-8 2h4M2.5 4.5l4 4v3l2 1v-4l4-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarFilter;
