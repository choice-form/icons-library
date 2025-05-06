import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * layout-split-left icon
 */
const LayoutSplitLeft: Icon = {
  name: 'layout-split-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M6 4.5H3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"/><path d="M8.5 6.5h4m-4 2h2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LayoutSplitLeft;
