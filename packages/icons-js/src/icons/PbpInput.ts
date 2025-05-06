import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * pbp-input icon
 */
const PbpInput: Icon = {
  name: 'pbp-input',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11.5 5.5-4 2m0 0-4-2m4 2v5"/><path stroke-opacity=".25" d="M11.5 7.5v3l-2 1M5.5 4.5l2-1 2 1"/><path d="m5.5 13.5 1.776.888a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447V8.5a2 2 0 0 0 2 2h2m0 0-2 2m2-2-2-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default PbpInput;
