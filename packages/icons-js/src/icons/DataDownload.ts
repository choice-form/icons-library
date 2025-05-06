import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * data-download icon
 */
const DataDownload: Icon = {
  name: 'data-download',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 6.5v-4h-3v4h-2l3.5 4 3.5-4z"/><path d="M13.5 9.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V9.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DataDownload;
