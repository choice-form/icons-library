import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-lock',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13 15.5H3A1.5 1.5 0 0 1 1.5 14V9A1.5 1.5 0 0 1 3 7.5h10A1.5 1.5 0 0 1 14.5 9v5a1.5 1.5 0 0 1-1.5 1.5M4.5 5.5V4a3.5 3.5 0 1 1 7 0v1.5"/><path d="M8 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LockComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}