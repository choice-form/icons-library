import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-design-solid',
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
      <path fill="currentColor" fill-rule="evenodd" d="M1 7.5C1 3.924 3.925 1 7.502 1 11 1 13.982 3.577 14 6.801v.003a3.846 3.846 0 0 1-4.032 3.83c-.698-.013-1.933-.036-1.303.931.639.983.167 2.435-1.163 2.435C3.925 14 1 11.076 1 7.5M4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clip-rule="evenodd"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}