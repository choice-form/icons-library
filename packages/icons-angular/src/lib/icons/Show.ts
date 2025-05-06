import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-show',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 7.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M7.5 5.5a2 2 0 0 1-2 2"/><path d="M7.5 3.5c-3.185 0-5.102 2.536-5.75 3.57a.8.8 0 0 0 0 .86c.648 1.034 2.565 3.57 5.75 3.57s5.102-2.536 5.75-3.57a.8.8 0 0 0 0-.86C12.603 6.035 10.686 3.5 7.5 3.5"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}