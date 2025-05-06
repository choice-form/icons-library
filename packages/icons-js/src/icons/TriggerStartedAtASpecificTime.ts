import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TriggerStartedAtASpecificTime icon
 */
const TriggerStartedAtASpecificTime: Icon = {
  name: 'trigger-started-at-a-specific-time',
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
      d: "M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7.5 3.5v3m1 2 1 1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/><path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7.5 3.5v3m1 2 1 1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TriggerStartedAtASpecificTime;
