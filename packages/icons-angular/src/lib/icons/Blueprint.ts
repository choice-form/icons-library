import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-blueprint',
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
      <g stroke="currentColor" stroke-linecap="round"><path d="M13.5 7.5v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5m0-4v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1M2.5 5.5h11M4.5 9.5h1m2 0h1m2 0h1M4.5 7.5h1m2 0h1m2 0h1M4.5 11.5h1m2 0h1m2 0h1M4.5 3.5h7"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlueprintComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}