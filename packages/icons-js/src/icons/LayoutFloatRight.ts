import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * layout-float-right icon
 */
const LayoutFloatRight: Icon = {
  name: 'layout-float-right',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 2.5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"/><path fill="currentColor" fill-opacity=".25" d="M9 6.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5"/><path d="M6.5 6.5h-4m4 2h-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LayoutFloatRight;
