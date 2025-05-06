import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * welcome-forms icon
 */
const WelcomeForms: Icon = {
  name: 'welcome-forms',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "32", height: "32", fill: "none", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 31.5h31M14.5 2.5v-2h-2v2zm0 0c0 2-2 2-2 2M10.5 2.5v-2h-2v2zm0 0c0 2-2 2-2 2M15.5 15.5h6m-9 1a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1M21.5 23.5h-4M15.5 19.5h6m-9 1a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1"/><path stroke-opacity=".25" d="M5.5 19.5h-1a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h1m23 0h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-2m-7-17h-3"/><path d="M8.5 19.5v-8a2 2 0 0 1 2-2h8m3 22h1a2 2 0 0 0 2-2v-15M4.5 27.5l1 1 2-2m2 1h3"/><path d="M13.5 23.5h-10a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"/><path fill="currentColor" fill-opacity=".25" d="M24.052 3.408a.5.5 0 0 1 .896 0l.98 1.987a.5.5 0 0 0 .377.273l2.193.32a.5.5 0 0 1 .277.853l-1.587 1.545a.5.5 0 0 0-.143.443l.374 2.182a.5.5 0 0 1-.726.527l-1.96-1.03a.5.5 0 0 0-.466 0l-1.96 1.03a.5.5 0 0 1-.726-.527l.375-2.182a.5.5 0 0 0-.144-.443l-1.587-1.545a.5.5 0 0 1 .277-.852l2.193-.321a.5.5 0 0 0 .376-.273z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WelcomeForms;
