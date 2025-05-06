import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-centralize',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 2.5-3 3m0 0H12m-2.5 0V3m-7 9.5 3-3m0 0H3m2.5 0V12m-3-9.5 3 3m0 0V3m0 2.5H3m9.5 7-3-3m0 0V12m0-2.5H12"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CentralizeComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}