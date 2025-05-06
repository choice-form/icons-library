import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * duplicate-solid icon
 */
const DuplicateSolid: Icon = {
  name: 'duplicate-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6.5a.5.5 0 0 1-.5-.5z"/><path d="M2 7a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .5.5V10h3.5a.5.5 0 0 1 .5.5V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DuplicateSolid;
