import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-view-settings',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 10.5v-1m2-8h-1a1 1 0 0 0-1 1v1m8-2h1a1 1 0 0 1 1 1v1m-4-2h-2m-4 6v-2M9 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path d="M13 9a4 4 0 0 0-.142-1l1.28-1.1-.75-1.3-1.579.556a4 4 0 0 0-1.748-1L9.75 3.5h-1.5l-.311 1.66a4 4 0 0 0-1.748 1L4.612 5.6l-.75 1.3L5.142 8c-.09.326-.138.662-.142 1 .004.338.052.674.142 1l-1.28 1.1.75 1.3 1.579-.555c.488.477 1.09.822 1.748 1L8.25 14.5h1.5l.311-1.66a4 4 0 0 0 1.748-1l1.579.555.75-1.3L12.858 10c.09-.326.138-.662.142-1"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSettingsComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}