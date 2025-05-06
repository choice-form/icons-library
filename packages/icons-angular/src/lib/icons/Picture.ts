import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-picture',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="m9.346 7.11-5.919 5.524a.5.5 0 0 0 .342.866H12.5a1 1 0 0 0 1-1v-3l-2.82-2.418a1 1 0 0 0-1.334.028"/><path d="M4.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}