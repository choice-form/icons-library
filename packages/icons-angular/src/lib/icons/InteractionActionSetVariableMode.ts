import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-interaction-action-set-variable-mode',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 10.5a2 2 0 0 1-4 0v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"/><path d="M10.35 8.5h1.15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6M5.5 10.5h.005"/><path d="m7.5 6 1.15-1.15a1.2 1.2 0 0 1 1.702.002l.948.948a1.2 1.2 0 0 1 .013 1.717L6.95 11.9"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractionActionSetVariableModeComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}