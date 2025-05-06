import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * layout-wallpaper icon
 */
const LayoutWallpaper: Icon = {
  name: 'layout-wallpaper',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path d="M3.5 5.5h8m-8 2h8m-8 2h3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LayoutWallpaper;
