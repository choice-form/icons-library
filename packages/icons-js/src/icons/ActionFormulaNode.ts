import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ActionFormulaNode icon
 */
const ActionFormulaNode: Icon = {
  name: 'action-formula-node',
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
      d: "M4.5 8.5h7M13.5 14.5l-3-3m3 0-3 3M12.5 4.5h-1.512a2 2 0 0 0-1.916 1.425l-2.144 7.15A2 2 0 0 1 5.012 14.5H2.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 8.5h7M13.5 14.5l-3-3m3 0-3 3M12.5 4.5h-1.512a2 2 0 0 0-1.916 1.425l-2.144 7.15A2 2 0 0 1 5.012 14.5H2.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionFormulaNode;
