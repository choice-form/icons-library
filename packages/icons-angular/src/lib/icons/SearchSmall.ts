import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-search-small',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 12.5-2.15-2.15M7.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSmallComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}