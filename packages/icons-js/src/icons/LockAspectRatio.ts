import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * lock-aspect-ratio icon
 */
const LockAspectRatio: Icon = {
  name: 'lock-aspect-ratio',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M10 10.5h1a2.5 2.5 0 0 0 0-5h-1m-4 0H5a2.5 2.5 0 0 0 0 5h1"/><path d="M5 8h6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LockAspectRatio;
