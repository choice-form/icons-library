import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * InteractionTriggerMouseUp icon
 */
const InteractionTriggerMouseUp: Icon = {
  name: 'interaction-trigger-mouse-up',
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
      d: "M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427M7.5 9.5V6m0 0L6 7.5M7.5 6 9 7.5M9 3l-.5 1M6 3l.5 1M10 5.5l1-.5m-6 .5L4 5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427M7.5 9.5V6m0 0L6 7.5M7.5 6 9 7.5M9 3l-.5 1M6 3l.5 1M10 5.5l1-.5m-6 .5L4 5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerMouseUp;
