import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * create-regular icon
 */
const CreateRegular: Icon = {
  name: 'create-regular',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m12.793 2.793-.586-.586a1 1 0 0 0-1.414 0L2.5 10.5l-1 3 3-1 8.293-8.293a1 1 0 0 0 0-1.414M9.5 3.5l2 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CreateRegular;
