import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-record-color',
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
      <path fill="currentColor" fill-opacity=".25" d="M13.5 12.5a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 2.5 3 3m7 7a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2m-6-11L2.207 6.793a1 1 0 0 0 0 1.414l4.086 4.086a1 1 0 0 0 1.414 0L13 7zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordColorComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}