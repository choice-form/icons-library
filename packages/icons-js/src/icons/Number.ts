import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * number icon
 */
const Number: Icon = {
  name: 'number',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path d="M8.501 6.409a1.18 1.18 0 0 1 1.221-.907c.399.027.788.212.972.556a1 1 0 0 1 .11.462c.002.561-.411.959-1.078 1.656-.286.299-.71.749-1.226 1.323h2.453M4.5 6.5l1-1v4h-1 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Number;
