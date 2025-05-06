import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-module-forms',
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
      <path fill="currentColor" fill-opacity=".25" d="M4.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 7.5h2m-2 4h2m-5-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8m-4-4 4 4m-4-4v3a1 1 0 0 0 1 1h3"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuleFormsComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}