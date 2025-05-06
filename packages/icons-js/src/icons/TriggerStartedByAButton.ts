import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TriggerStartedByAButton icon
 */
const TriggerStartedByAButton: Icon = {
  name: 'trigger-started-by-a-button',
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
      d: "M13.5 5.5v-3a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4",
      "stroke-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7 2.5 6.5 1-3 3-1z"/><path stroke-opacity=".25" d="M7 3.5 7.5 5M6 6.5 4.5 6m6-1.5-1 1m-3 3-1 1"/><path d="M13.5 5.5v-3a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TriggerStartedByAButton;
