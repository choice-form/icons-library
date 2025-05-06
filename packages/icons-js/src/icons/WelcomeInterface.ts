import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WelcomeInterface icon
 */
const WelcomeInterface: Icon = {
  name: 'welcome-interface',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "32",
      height: "32",
      fill: "currentColor",
      viewBox: "0 0 32 32",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.5 4.5h3m0 0L10 3m1.5 1.5L10 6m8.5-1.5h-3m0 0L17 6m-1.5-1.5L17 3M13.5.5v8",
      "fill-opacity": ".25",
      "stroke-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M.5 31.5h31M25 18l2.5 6.5 1-3 3-1zM24 14.5l.5 1.5M23 17.5l-1.5-.5m6-1.5-1 1m-3 3-1 1M28.5 13.5v-2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path stroke-linecap="round" stroke-linejoin="round" d="M23.5 24.5v5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h5"/><path d="M9.5 26.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"/><path fill="currentColor" fill-opacity=".25" d="M9.5 21a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5zM16.5 28a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M25.5 9.5v-3a2 2 0 0 0-2-2h-2m-18 17h-1a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h2"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.5 4.5h3m0 0L10 3m1.5 1.5L10 6m8.5-1.5h-3m0 0L17 6m-1.5-1.5L17 3M13.5.5v8"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WelcomeInterface;
