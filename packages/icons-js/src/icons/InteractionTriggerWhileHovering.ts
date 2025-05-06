import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * InteractionTriggerWhileHovering icon
 */
const InteractionTriggerWhileHovering: Icon = {
  name: 'interaction-trigger-while-hovering',
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
      d: "M2.5 9.5c0-1 2-2 5-2s5 1 5 2m-10 0c0 1 2 2 5 2s5-1 5-2m-10 0v2c0 1 2 2 5 2s5-1 5-2v-2M6 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5c0-1 2-2 5-2s5 1 5 2m-10 0c0 1 2 2 5 2s5-1 5-2m-10 0v2c0 1 2 2 5 2s5-1 5-2v-2M6 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default InteractionTriggerWhileHovering;
