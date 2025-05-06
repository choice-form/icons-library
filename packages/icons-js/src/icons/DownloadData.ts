import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * download-data icon
 */
const DownloadData: Icon = {
  name: 'download-data',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 8.5v-4h-3v4h-2l3.5 4 3.5-4zM10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v1.5M5.5 2.5H4A1.5 1.5 0 0 0 2.5 4v1.5M10.5 13.5H12a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.5 13.5H4A1.5 1.5 0 0 1 2.5 12v-1.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DownloadData;
