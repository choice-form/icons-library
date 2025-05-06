import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * trash-small icon
 */
const TrashSmall: Icon = {
  name: 'trash-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h9m-1 0v7c0 .5-.5 1-1 1h-5c-.5 0-1-.5-1-1v-7m1.5 0v-1c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TrashSmall;
