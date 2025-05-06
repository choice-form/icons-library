import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarCreateSolid icon
 */
const ToolbarCreateSolid: Icon = {
  name: 'toolbar-create-solid',
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
      d: "M11.56.854a1.5 1.5 0 0 0-2.12 0l-.586.585a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707 0l.585-.585a1.5 1.5 0 0 0 0-2.122zM11.146 6.56a.5.5 0 0 0 0-.706l-3-3a.5.5 0 0 0-.707 0L1.842 8.45a1.5 1.5 0 0 0-.394.696L.515 12.88a.5.5 0 0 0 .606.606l3.732-.933a1.5 1.5 0 0 0 .696-.394z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 15.5h14"/><path fill="currentColor" d="M11.56.854a1.5 1.5 0 0 0-2.12 0l-.586.585a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707 0l.585-.585a1.5 1.5 0 0 0 0-2.122zM11.146 6.56a.5.5 0 0 0 0-.706l-3-3a.5.5 0 0 0-.707 0L1.842 8.45a1.5 1.5 0 0 0-.394.696L.515 12.88a.5.5 0 0 0 .606.606l3.732-.933a1.5 1.5 0 0 0 .696-.394z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarCreateSolid;
