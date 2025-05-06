import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ComponentSolid icon
 */
const ComponentSolid: Icon = {
  name: 'component-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      d: "M5.784 4.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM5.784 11.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM10.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372zM3.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g fill="currentColor"><path d="M5.784 4.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM5.784 11.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM10.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372zM3.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ComponentSolid;
