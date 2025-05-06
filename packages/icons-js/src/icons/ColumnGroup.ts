import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * column-group icon
 */
const ColumnGroup: Icon = {
  name: 'column-group',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12V8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5M12 12.5h-1a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5"/><path fill="currentColor" d="M8 2.5H7a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ColumnGroup;
