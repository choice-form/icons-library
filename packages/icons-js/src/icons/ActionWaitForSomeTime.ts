import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ActionWaitForSomeTime icon
 */
const ActionWaitForSomeTime: Icon = {
  name: 'action-wait-for-some-time',
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
      d: "M7.5 6.5v2l-2 2M7.5 3.5v-2m-2 0h4",
      "stroke-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 8.5a5 5 0 1 1-5-5"/><path stroke-opacity=".25" d="M9.5 3.916A5.02 5.02 0 0 1 12.084 6.5"/><path d="M7.5 6.5v2l-2 2M7.5 3.5v-2m-2 0h4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionWaitForSomeTime;
