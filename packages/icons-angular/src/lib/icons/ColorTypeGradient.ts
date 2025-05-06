import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-color-type-gradient',
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
      <g stroke="currentColor"><path d="M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".75" d="M6.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" d="M8.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M10.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorTypeGradientComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}