import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * record-settings icon
 */
const RecordSettings: Icon = {
  name: 'record-settings',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4.5 2.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707M3.086 5.914l-.707.707m3.535-.707.707.707M3.086 3.086l-.707-.707"/><path fill="currentColor" fill-opacity=".25" d="M14.5 13.5v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 3.5h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4m-7 4v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordSettings;
