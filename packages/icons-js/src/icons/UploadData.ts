import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * upload-data icon
 */
const UploadData: Icon = {
  name: 'upload-data',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 7.5 8 3.5l-3.5 4h2v4h3v-4zM13.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5h-1.5M2.5 10.5V12A1.5 1.5 0 0 0 4 13.5h1.5M13.5 5.5V4A1.5 1.5 0 0 0 12 2.5h-1.5M2.5 5.5V4A1.5 1.5 0 0 1 4 2.5h1.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UploadData;
