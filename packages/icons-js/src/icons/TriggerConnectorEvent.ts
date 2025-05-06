import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TriggerConnectorEvent icon
 */
const TriggerConnectorEvent: Icon = {
  name: 'trigger-connector-event',
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
      d: "M7 6 5.5 7.5M10 9l-1.5 1.5M13 3a3.536 3.536 0 0 0-5 0l-.5.5 5 5L13 8a3.536 3.536 0 0 0 0-5m0 0 1.5-1.5M4 12a3.536 3.536 0 0 0 5 0l.5-.5-5-5L4 7a3.536 3.536 0 0 0 0 5m0 0-2.5 2.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 6 5.5 7.5M10 9l-1.5 1.5M13 3a3.536 3.536 0 0 0-5 0l-.5.5 5 5L13 8a3.536 3.536 0 0 0 0-5m0 0 1.5-1.5M4 12a3.536 3.536 0 0 0 5 0l.5-.5-5-5L4 7a3.536 3.536 0 0 0 0 5m0 0-2.5 2.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TriggerConnectorEvent;
