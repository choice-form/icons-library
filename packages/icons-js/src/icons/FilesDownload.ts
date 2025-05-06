import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * files-download icon
 */
const FilesDownload: Icon = {
  name: 'files-download',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5h-.5M2.5 10.5h11"/><path d="M10.5 6 8 8.5 5.5 6M8 2.5v6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FilesDownload;
