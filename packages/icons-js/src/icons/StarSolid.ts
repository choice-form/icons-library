import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * star-solid icon
 */
const StarSolid: Icon = {
  name: 'star-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" d="m13.572 6.27-3.54-.514-1.584-3.208a.52.52 0 0 0-.9 0l-1.58 3.208-3.54.514a.5.5 0 0 0-.277.853l2.562 2.5-.606 3.526a.5.5 0 0 0 .726.527L8 12.008l3.167 1.665a.5.5 0 0 0 .726-.527l-.606-3.526 2.562-2.5a.5.5 0 0 0-.277-.853z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default StarSolid;
