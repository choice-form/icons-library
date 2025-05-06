import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-field-type-system-id',
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
      <g stroke-linecap="round" stroke-linejoin="round"><path stroke="#05F" d="M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/><path stroke="currentColor" d="M11.5 4c0 .828-2.015 1.5-4.5 1.5S2.5 4.828 2.5 4m9 0c0-.828-2.015-1.5-4.5-1.5S2.5 3.172 2.5 4m9 0v1.5M2.5 4v3.5m0 0V11c-.003.24.168.478.498.691.33.214.809.399 1.397.538.588.14 1.268.23 1.982.262.715.034 1.443.01 2.123-.071m-6-4.92c1.5 1 4.219 1.178 6 1"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldTypeSystemIdComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}