import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-styles',
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
      <g stroke="currentColor"><path d="M6.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM6.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylesComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}