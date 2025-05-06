import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-remove-large-solid icon
 */
const CircleRemoveLargeSolid: Icon = {
  name: 'circle-remove-large-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.182 9.768a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0L8 9.414l-1.768 1.768a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707L6.586 8 4.818 6.232a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .707 0L8 6.586l1.768-1.768a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707L9.414 8z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleRemoveLargeSolid;
