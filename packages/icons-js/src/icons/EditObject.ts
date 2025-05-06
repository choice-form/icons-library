import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EditObject icon
 */
const EditObject: Icon = {
  name: 'edit-object',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M2.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4.5 3.5h6M11.5 4.5v6m-1 1h-6m-1-1v-6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M2.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4.5 3.5h6M11.5 4.5v6m-1 1h-6m-1-1v-6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EditObject;
