import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-dynamic icon
 */
const FieldDynamic: Icon = {
  name: 'field-dynamic',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 3.5v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1m7 1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2M7.759 8.026v3.126c0 .964 1.524 1.179 2.322-.125.677-1.104.51-2.787-.334-3.895-1.243-1.63-4.118-2.24-6.206-.892C1.62 7.478.939 9.984 1.999 12.01c1.05 2.004 3.512 2.976 5.741 2.25m.011-4.322c0 1.037-.818 1.879-1.827 1.879s-1.827-.842-1.827-1.88.818-1.879 1.827-1.879c1.01 0 1.827.842 1.827 1.88"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldDynamic;
