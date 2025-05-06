import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * square-info-large-solid icon
 */
const SquareInfoLargeSolid: Icon = {
  name: 'square-info-large-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M9 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SquareInfoLargeSolid;
