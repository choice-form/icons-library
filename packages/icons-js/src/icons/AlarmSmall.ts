import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * alarm-small icon
 */
const AlarmSmall: Icon = {
  name: 'alarm-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.592 12.5a1.491 1.491 0 0 0 2.816 0M2.5 10.5h11M13.5 10.5a2.15 2.15 0 0 1-2-2V6a3.5 3.5 0 1 0-7 0v2.5a2.15 2.15 0 0 1-2 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlarmSmall;
