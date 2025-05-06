import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-bin-solid',
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
      <path fill="currentColor" fill-rule="evenodd" d="M6 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2h3zM4.118 7.177A.5.5 0 0 1 4.5 7h7a.5.5 0 0 1 .493.582l-.86 5.165A1.5 1.5 0 0 1 9.653 14H6.347a1.5 1.5 0 0 1-1.48-1.253l-.86-5.165a.5.5 0 0 1 .111-.405" clip-rule="evenodd"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BinSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}