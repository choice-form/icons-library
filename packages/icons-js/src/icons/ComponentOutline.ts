import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * component-outline icon
 */
const ComponentOutline: Icon = {
  name: 'component-outline',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linejoin="round"><path d="M9.646 4.146 8.354 2.854a.5.5 0 0 0-.708 0L6.354 4.146a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708ZM6.146 7.646 4.854 6.354a.5.5 0 0 0-.708 0L2.854 7.646a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708ZM13.146 7.646l-1.293-1.292a.5.5 0 0 0-.707 0L9.854 7.646a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .707 0l1.293-1.292a.5.5 0 0 0 0-.708ZM9.646 11.146 8.354 9.854a.5.5 0 0 0-.708 0l-1.292 1.292a.5.5 0 0 0 0 .707l1.292 1.293a.5.5 0 0 0 .708 0l1.292-1.293a.5.5 0 0 0 0-.707Z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ComponentOutline;
