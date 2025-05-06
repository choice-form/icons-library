import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TriggerStartedByWebhook icon
 */
const TriggerStartedByWebhook: Icon = {
  name: 'trigger-started-by-webhook',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M7.5 4a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 11h-3",
      "stroke-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 11a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M8 4l1.714 3M4 11l1.24-2.17 1.51-2.665a2.5 2.5 0 1 1 3.7-1.665M6.292 10A2.5 2.5 0 1 1 3.5 8.55"/><path stroke-opacity=".25" d="M11.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"/><path d="M3.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M7.5 4a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 11h-3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TriggerStartedByWebhook;
