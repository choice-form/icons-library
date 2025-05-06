import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * CreateSolid icon
 */
const CreateSolid: Icon = {
  name: 'create-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-rule": "evenodd",
      d: "M10.44 1.854a1.5 1.5 0 0 1 2.12 0l.586.585a1.5 1.5 0 0 1 0 2.122l-.792.793a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708zM8.145 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.196.12l-3 1a.5.5 0 0 1-.632-.632l1-3a.5.5 0 0 1 .12-.196z",
      "clip-rule": "evenodd",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-rule="evenodd" d="M10.44 1.854a1.5 1.5 0 0 1 2.12 0l.586.585a1.5 1.5 0 0 1 0 2.122l-.792.793a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708zM8.145 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.196.12l-3 1a.5.5 0 0 1-.632-.632l1-3a.5.5 0 0 1 .12-.196z" clip-rule="evenodd"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CreateSolid;
