import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * welcome-extension icon
 */
const WelcomeExtension: Icon = {
  name: 'welcome-extension',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "32", height: "32", fill: "none", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 31.5h31M5.5 28.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 24.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707M5.5 20.5v-5a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1M7.5 15.5h.005M9.5 15.5h.005M11.5 15.5h.005"/><path fill="currentColor" fill-opacity=".25" d="M29.5 17.5h-24v-2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2z"/><path stroke-opacity=".25" d="M26.5 10.5v-6a2 2 0 0 0-2-2h-7m-15 18a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h2"/><path d="m14.5 22.5-2 2 2 2m6 0 2-2-2-2M19.5 20.5l-4 8"/><path fill="currentColor" d="M10.5 2.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2"/><path d="M3.5 7.5a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WelcomeExtension;
