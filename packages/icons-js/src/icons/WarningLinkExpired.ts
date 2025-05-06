import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * warning-link-expired icon
 */
const WarningLinkExpired: Icon = {
  name: 'warning-link-expired',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5.5-4 4m-10 10 4-4M9.5 7.5l.293.293a1 1 0 0 0 1.414 0l1.879-1.879a2 2 0 0 0 0-2.828l-1.172-1.172a2 2 0 0 0-2.828 0L7.207 3.793a1 1 0 0 0 0 1.414L7.5 5.5M5.5 7.5l-.293-.293a1 1 0 0 0-1.414 0L1.914 9.086a2 2 0 0 0 0 2.828l1.172 1.172a2 2 0 0 0 2.828 0l1.879-1.879a1 1 0 0 0 0-1.414L7.5 9.5M8 7 7 8M3 3 1.5 1.5M12 12l1.5 1.5m-1-4h2m-5 3v2m-7-9h-2m5-3v-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningLinkExpired;
