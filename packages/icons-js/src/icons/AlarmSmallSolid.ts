import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * alarm-small-solid icon
 */
const AlarmSmallSolid: Icon = {
  name: 'alarm-small-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g fill="currentColor"><path d="M13.5 10A1.65 1.65 0 0 1 12 8.5V6a4 4 0 1 0-8 0v2.5A1.65 1.65 0 0 1 2.5 10a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1M8 14a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlarmSmallSolid;
