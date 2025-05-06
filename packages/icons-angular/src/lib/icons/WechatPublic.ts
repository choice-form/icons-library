import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-wechat-public',
  standalone: true,
  template: `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      [attr.viewBox]="viewBox || '0 0 16 16'" 
      [attr.width]="width || '16'" 
      [attr.height]="height || '16'" 
      [attr.fill]="color" 
      [attr.aria-hidden]="title ? 'false' : 'true'"
      class="choiceform-icon"
    >
      <ng-container *ngIf="title">
        <title>{{title}}</title>
      </ng-container>
      <g fill="#31BF63"><path d="M12.021 4.33C11.381 3.02 9.771 1.9 7.947 1.9c-.96 0-2.422.33-3.515 1.653a3.67 3.67 0 0 0-.821 2.95c.106.709.501 1.642 1.066 2.234.214-1.499 1.003-2.677 2.038-3.541C8.576 3.76 10.57 3.84 12.02 4.33" opacity=".7"/><path d="M13.477 6.576c-1.141-1.483-3.12-1.899-4.901-1.237q.09.023.17.053c2.64.901 4.07 3.765 3.19 6.395a5 5 0 0 1-1.083 1.818c.571-.16 1.152-.384 1.648-.768 2.016-1.541 2.411-4.4.976-6.261" opacity=".7"/><path d="M7.941 11.317c-.4 0-.789-.048-1.162-.128a.626.626 0 0 0-.448.09l-1.232.79a.3.3 0 0 1-.112.043.196.196 0 0 1-.203-.187c0-.048.016-.096.027-.144.005-.026.138-.618.218-.992a.5.5 0 0 0 .016-.122.39.39 0 0 0-.17-.304C3.573 9.477 2.683 8.085 2.49 6.65a5.3 5.3 0 0 0-.672 1.514c-.635 2.219.757 4.88 3.024 5.627 2.608.859 5.098-.107 5.957-2.325.107-.272.219-.726.24-1.11-.912.672-1.877.96-3.099.96" opacity=".7"/><path d="M7.941 11.317c-.4 0-.789-.048-1.162-.128a.626.626 0 0 0-.448.09l-1.232.79a.3.3 0 0 1-.112.043.196.196 0 0 1-.203-.187c0-.048.016-.096.027-.144.005-.026.138-.618.218-.992a.5.5 0 0 0 .016-.122.39.39 0 0 0-.17-.304C3.573 9.477 2.683 8.085 2.49 6.65a5.3 5.3 0 0 0-.672 1.514c-.635 2.219.757 4.88 3.024 5.627 2.608.859 5.098-.107 5.957-2.325.107-.272.219-.726.24-1.11-.912.672-1.877.96-3.099.96" opacity=".7"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WechatPublicComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}