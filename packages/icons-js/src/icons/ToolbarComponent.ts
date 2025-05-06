import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-component icon
 */
const ToolbarComponent: Icon = {
  name: 'toolbar-component',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="m8.354.854 2.292 2.292a.5.5 0 0 1 0 .708L8.354 6.146a.5.5 0 0 1-.708 0L5.354 3.854a.5.5 0 0 1 0-.708L7.646.854a.5.5 0 0 1 .708 0ZM8.354 9.854l2.292 2.292a.5.5 0 0 1 0 .708l-2.292 2.292a.5.5 0 0 1-.708 0l-2.292-2.292a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0ZM15.146 8.354l-2.292 2.292a.5.5 0 0 1-.708 0L9.854 8.354a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708ZM6.146 8.354l-2.292 2.292a.5.5 0 0 1-.708 0L.854 8.354a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708Z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarComponent;
