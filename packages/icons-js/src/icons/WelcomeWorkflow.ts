import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * welcome-workflow icon
 */
const WelcomeWorkflow: Icon = {
  name: 'welcome-workflow',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "32", height: "32", fill: "none", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 31.5h31M6.5 16.5 8 15m.5-4.5L7 12m0 0-1.5 1.5L8 15m-1-3 2.5 1.5L8 15M8.5 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17.5 25.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 7.5h-3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3m2-12h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3M7.5 20.5v1a1 1 0 0 0 1 1h7a1 1 0 0 1 1 1v1M17.5 25.5h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h6M14.5 28.5h-4M22.5 28.5h-4"/><path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.587 11.78c-.815.685-1.087 2.72-1.087 2.72s2.033-.272 2.718-1.088c.386-.457.38-1.16-.049-1.584a1.185 1.185 0 0 0-1.582-.049"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.5 11.5-2-2c1.254-3.252 4.507-6.022 8.083-6 0 3.584-2.8 6.752-6.083 8"/><path fill="currentColor" fill-opacity=".25" d="M21.5 9.5h-3s0-2.36 1-2.86 3 .5 3 .5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 9.5h-3s0-2.36 1-2.86 3 .5 3 .5"/><path fill="currentColor" fill-opacity=".25" d="M23.5 11.5v3s2.36 0 2.86-1-.5-3-.5-3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 11.5v3s2.36 0 2.86-1-.5-3-.5-3M26.5 6.5h.005"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M22.5 3.5v-1a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v4m15 11v3a2 2 0 0 1-2 2h-5"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WelcomeWorkflow;
