import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-settings-regular',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path d="M14.5 8.867V7.133l-1.887-.314a4.7 4.7 0 0 0-.52-1.246l1.112-1.56-1.218-1.222-1.56 1.111a4.7 4.7 0 0 0-1.246-.515L8.867 1.5H7.133L6.82 3.387a4.7 4.7 0 0 0-1.246.515l-1.56-1.11-1.222 1.221 1.111 1.56c-.23.389-.404.808-.515 1.246L1.5 7.133v1.734l1.887.314c.111.438.285.857.515 1.246l-1.11 1.56 1.221 1.222 1.56-1.111c.389.231.808.407 1.246.52l.314 1.882h1.734l.314-1.887a4.7 4.7 0 0 0 1.246-.52l1.56 1.112 1.222-1.218-1.111-1.56c.231-.388.407-.808.52-1.246z"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsRegularComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}