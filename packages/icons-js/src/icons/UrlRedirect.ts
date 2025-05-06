import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * UrlRedirect icon
 */
const UrlRedirect: Icon = {
  name: 'url-redirect',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 11.5v-3l2 3v-3m2 0v3h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m13.5 2.5-4 4m4-4v3m0-3h-3M7.5 3.5h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11m-8-8h-2v6h2m-2-3h2"/><path d="M7.5 11.5v-3l2 3v-3m2 0v3h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UrlRedirect;
