import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-field-type-rating',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 2.5 1.545 3.13 3.455.505L10 8.57l.59 3.44-3.09-1.625-3.09 1.625L5 8.57 2.5 6.135l3.455-.505z"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldTypeRatingComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}