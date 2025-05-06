import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * view-grid icon
 */
const ViewGrid: Icon = {
  name: 'view-grid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1M1.5 9.5h6m0 0v-4m0 4v4m0-4h6m-12-4h12"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ViewGrid;
