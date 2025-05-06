import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-upload-data',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 7.5 8 3.5l-3.5 4h2v4h3v-4zM13.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5h-1.5M2.5 10.5V12A1.5 1.5 0 0 0 4 13.5h1.5M13.5 5.5V4A1.5 1.5 0 0 0 12 2.5h-1.5M2.5 5.5V4A1.5 1.5 0 0 1 4 2.5h1.5"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadDataComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}