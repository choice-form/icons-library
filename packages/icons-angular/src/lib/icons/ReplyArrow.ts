import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-reply-arrow',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 8 5-4.5v3c2.773 0 6 1.233 6 6a6.62 6.62 0 0 0-6-3v3z"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplyArrowComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}