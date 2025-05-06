import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * record-hide icon
 */
const RecordHide: Icon = {
  name: 'record-hide',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 12.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-8-3h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v1M7.207 11.207a1 1 0 0 1-1.414-1.414M6 7.52q.243-.02.5-.02c3.5 0 5 3 5 3s-.375.75-1.187 1.5"/><path fill="currentColor" fill-opacity=".25" d="M1.5 10.5s1.5 3 5 3c.963 0 1.774-.227 2.444-.556L4.056 8.056C2.288 8.923 1.5 10.5 1.5 10.5"/><path d="m1.5 5.5 9 9"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordHide;
