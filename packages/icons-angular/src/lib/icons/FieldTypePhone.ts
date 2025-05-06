import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-field-type-phone',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.444 9.96v1.5a1 1 0 0 1-1.09 1 9.9 9.9 0 0 1-4.315-1.535 9.75 9.75 0 0 1-3-3A9.9 9.9 0 0 1 2.504 3.59 1 1 0 0 1 3.5 2.5H5a1 1 0 0 1 1 .86q.095.722.35 1.405a1 1 0 0 1-.225 1.055l-.635.635a8 8 0 0 0 3 3l.635-.635a1 1 0 0 1 1.055-.225q.683.255 1.405.35a1 1 0 0 1 .86 1.015"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldTypePhoneComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}