import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * edit-object icon
 */
const EditObject: Icon = {
  name: 'edit-object',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M2.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4.5 3.5h6M11.5 4.5v6m-1 1h-6m-1-1v-6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EditObject;
