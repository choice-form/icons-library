import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-get-segment-filters icon
 */
const ActionGetSegmentFilters: Icon = {
  name: 'action-get-segment-filters',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m13.5 6.5-3 3.5v4.5l-2-1V10l-3-3.5"/><path stroke-opacity=".25" d="M8.5 6.5h2"/><path d="M4.5 4.5h10M13.5 2.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionGetSegmentFilters;
