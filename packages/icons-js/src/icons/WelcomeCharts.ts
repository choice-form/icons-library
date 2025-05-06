import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WelcomeCharts icon
 */
const WelcomeCharts: Icon = {
  name: 'welcome-charts',
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
      d: "M5.501 2.409a1.18 1.18 0 0 1 1.221-.907c.399.027.788.212.972.556a1 1 0 0 1 .11.462c.002.561-.411.959-1.078 1.656-.286.299-.71.749-1.226 1.323h2.453M1.5 2.5l1-1v4h-1 2",
      "fill-opacity": ".25",
      "stroke-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 31.5h31"/><path fill="currentColor" fill-opacity=".25" d="M13.5 26v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5M19 18.5h-1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5M23 26.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 26v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5M19 18.5h-1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5M23 26.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5M6.5 29.5 9 27M10.5 22.5v-11a2 2 0 0 1 2-2h4m7 22h1a2 2 0 0 0 2-2v-10M13.5 28.5h10M1.916 31.5a5 5 0 1 1 9.168 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M6.5 26.5a3 3 0 0 0-3 3"/><path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.5 7.9V5.5a5.01 5.01 0 0 1 3.9 3.9H28c0-.5-1-1.5-1.5-1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 11.4a5 5 0 0 0 10 0h-3a2 2 0 1 1-2-2v-3a5 5 0 0 0-5 5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M2.5 8.5v9a2 2 0 0 0 2 2h3m9-13v-2a2 2 0 0 0-2-2h-4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.501 2.409a1.18 1.18 0 0 1 1.221-.907c.399.027.788.212.972.556a1 1 0 0 1 .11.462c.002.561-.411.959-1.078 1.656-.286.299-.71.749-1.226 1.323h2.453M1.5 2.5l1-1v4h-1 2"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WelcomeCharts;
