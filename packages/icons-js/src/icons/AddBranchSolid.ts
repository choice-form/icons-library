import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * add-branch-solid icon
 */
const AddBranchSolid: Icon = {
  name: 'add-branch-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g fill="currentColor"><path fill-rule="evenodd" d="M5 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m5-2a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H10z" clip-rule="evenodd"/><path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AddBranchSolid;
