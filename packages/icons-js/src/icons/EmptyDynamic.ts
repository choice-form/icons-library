import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * empty-dynamic icon
 */
const EmptyDynamic: Icon = {
  name: 'empty-dynamic',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M9.454 7.306v3.474c0 1.071 1.694 1.31 2.58-.14.752-1.226.568-3.096-.37-4.326-1.382-1.812-4.576-2.49-6.896-.992-2.133 1.376-2.892 4.16-1.714 6.411 1.166 2.227 3.902 3.306 6.38 2.501m.012-4.803c0 1.153-.909 2.088-2.03 2.088s-2.03-.935-2.03-2.088.909-2.088 2.03-2.088 2.03.934 2.03 2.088"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyDynamic;
