import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Settings icon
 */
const Settings: Icon = {
  name: 'settings',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.5 8.867V7.133l-1.887-.314a4.7 4.7 0 0 0-.52-1.246l1.112-1.56-1.218-1.222-1.56 1.111a4.7 4.7 0 0 0-1.246-.515L8.867 1.5H7.133L6.82 3.387a4.7 4.7 0 0 0-1.246.515l-1.56-1.11-1.222 1.221 1.111 1.56c-.23.389-.404.808-.515 1.246L1.5 7.133v1.734l1.887.314c.111.438.285.857.515 1.246l-1.11 1.56 1.221 1.222 1.56-1.111c.389.231.808.407 1.246.52l.314 1.882h1.734l.314-1.887a4.7 4.7 0 0 0 1.246-.52l1.56 1.112 1.222-1.218-1.111-1.56c.231-.388.407-.808.52-1.246z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path d="M14.5 8.867V7.133l-1.887-.314a4.7 4.7 0 0 0-.52-1.246l1.112-1.56-1.218-1.222-1.56 1.111a4.7 4.7 0 0 0-1.246-.515L8.867 1.5H7.133L6.82 3.387a4.7 4.7 0 0 0-1.246.515l-1.56-1.11-1.222 1.221 1.111 1.56c-.23.389-.404.808-.515 1.246L1.5 7.133v1.734l1.887.314c.111.438.285.857.515 1.246l-1.11 1.56 1.221 1.222 1.56-1.111c.389.231.808.407 1.246.52l.314 1.882h1.734l.314-1.887a4.7 4.7 0 0 0 1.246-.52l1.56 1.112 1.222-1.218-1.111-1.56c.231-.388.407-.808.52-1.246z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Settings;
