import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-trigger-started-by-an-event',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5V12a.5.5 0 0 0 .5.5h1.5m-2-2V9a.5.5 0 0 1 .5-.5h1.5m-2 2h6m-4 2v-4m0 4h2m-2-4h2m2 2V9a.5.5 0 0 0-.5-.5H8.5m2 2V12a.5.5 0 0 1-.5.5H8.5m0-4v4"/><path fill="currentColor" fill-opacity=".25" d="m12.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path d="M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggerStartedByAnEventComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}