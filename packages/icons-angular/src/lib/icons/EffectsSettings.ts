import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-effects-settings',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v1m0 8v1M3.965 3.965l.705.705m5.66 5.66.705.705M2.5 7.5h1m8 0h1m-7.83 2.83-.705.705m7.07-7.07-.705.705M9.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EffectsSettingsComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}