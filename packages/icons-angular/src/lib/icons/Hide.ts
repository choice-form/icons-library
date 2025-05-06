import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-hide',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 5.5c.512 0 1.024.195 1.414.586S9.5 6.988 9.5 7.5m-2 2a2 2 0 0 1-1.414-.586A2 2 0 0 1 5.5 7.5"/><path d="M3 5.5a9 9 0 0 0-1.25 1.568.8.8 0 0 0 0 .863C2.397 8.964 4.314 11.5 7.5 11.5a5.8 5.8 0 0 0 1.5-.196M12 9.5a9 9 0 0 0 1.25-1.568.8.8 0 0 0 0-.863C12.603 6.036 10.686 3.5 7.5 3.5c-.536 0-1.036.072-1.5.196M2.5 2.5l10 10"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HideComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}