import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * InteractionTriggerWhilePressing icon
 */
const InteractionTriggerWhilePressing: Icon = {
  name: 'interaction-trigger-while-pressing',
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
      d: "M6 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427"/><path d="M6 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerWhilePressing;
