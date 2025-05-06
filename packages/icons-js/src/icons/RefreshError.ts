import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * refresh-error icon
 */
const RefreshError: Icon = {
  name: 'refresh-error',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="m12.25 9.25 2.25 1.25-5 4 1.25-3.75L8.5 9.5l5-4z"/><path d="M10.036 3.964A5 5 0 1 0 7.5 12.4"/><path stroke-linejoin="round" d="M7.5 4.5h3v-3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RefreshError;
