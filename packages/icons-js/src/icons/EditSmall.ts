import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * edit-small icon
 */
const EditSmall: Icon = {
  name: 'edit-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 13.5h11M10.5 2.5l2 2-6 6-3 1 1-3z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EditSmall;
