import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-cogwheel-small',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8.9V7.1l-1.668-.185a4 4 0 0 0-.355-.857l1.049-1.311-1.273-1.273-1.311 1.049a4 4 0 0 0-.857-.355L8.9 2.5H7.1l-.185 1.668a4 4 0 0 0-.857.355L4.747 3.474 3.474 4.747l1.049 1.311c-.151.27-.27.559-.355.857L2.5 7.1v1.8l1.668.185q.128.449.355.857l-1.049 1.311 1.273 1.272 1.311-1.048c.27.151.559.27.857.355L7.1 13.5h1.8l.185-1.668q.449-.128.857-.355l1.311 1.048 1.273-1.272-1.049-1.311c.151-.27.27-.559.355-.857z"/><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CogwheelSmallComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}