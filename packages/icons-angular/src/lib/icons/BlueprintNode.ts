import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-blueprint-node',
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M2.5 6.5v-3a1 1 0 0 1 1-1h3m-4 6v3a1 1 0 0 0 1 1h3m2 0h3a1 1 0 0 0 1-1v-3m0-2v-3a1 1 0 0 0-1-1h-3"/><path d="M6.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM1.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM6.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlueprintNodeComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}