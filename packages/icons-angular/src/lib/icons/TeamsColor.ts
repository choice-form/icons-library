import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-teams-color',
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
      <mask id="a" width="16" height="16" x="0" y="0" mask-type="luminance" maskUnits="userSpaceOnUse"><path fill="#fff" d="M16 0H0v16h16z"/></mask><g mask="url(#a)"><path fill="#5059C9" d="M10.998 6.233h3.921c.37 0 .671.3.671.672v3.578a2.47 2.47 0 0 1-2.465 2.47h-.012a2.467 2.467 0 0 1-2.466-2.47V6.584a.35.35 0 0 1 .351-.351M13.648 5.526a1.59 1.59 0 0 0 1.59-1.592 1.59 1.59 0 0 0-1.59-1.591 1.59 1.59 0 0 0-1.588 1.591 1.59 1.59 0 0 0 1.588 1.592"/><path fill="#7B83EB" d="M8.706 5.526A2.297 2.297 0 0 0 11 3.226 2.297 2.297 0 0 0 8.706.929 2.297 2.297 0 0 0 6.41 3.227a2.297 2.297 0 0 0 2.295 2.299M11.766 6.233H5.292a.664.664 0 0 0-.648.68v4.08a3.986 3.986 0 0 0 3.884 4.081 3.986 3.986 0 0 0 3.884-4.08V6.913a.664.664 0 0 0-.648-.68"/><path fill="currentColor" d="M8.882 6.233v5.719a.65.65 0 0 1-.646.647h-3.28a4.314 4.314 0 0 1-.31-1.606V6.912a.663.663 0 0 1 .645-.68z" opacity=".1"/><path fill="currentColor" d="M8.529 6.233v6.072a.65.65 0 0 1-.646.647H5.122a5 5 0 0 1-.166-.353 4.314 4.314 0 0 1-.31-1.606V6.912a.663.663 0 0 1 .645-.68z" opacity=".2"/><path fill="currentColor" d="M8.529 6.233v5.365a.65.65 0 0 1-.646.647h-3.05a4.3 4.3 0 0 1-.188-1.252V6.912a.663.663 0 0 1 .646-.68z" opacity=".2"/><path fill="currentColor" d="M8.176 6.233v5.365a.65.65 0 0 1-.646.647H4.833a4.3 4.3 0 0 1-.188-1.252V6.912a.663.663 0 0 1 .646-.68z" opacity=".2"/><path fill="currentColor" d="M8.882 4.404v1.114c-.06.004-.116.008-.176.008q-.088-.001-.177-.008a2.296 2.296 0 0 1-2.055-1.761h1.762a.65.65 0 0 1 .646.647" opacity=".1"/><path fill="currentColor" d="M8.529 4.758v.76A2.296 2.296 0 0 1 6.587 4.11h1.296a.65.65 0 0 1 .646.648" opacity=".2"/><path fill="currentColor" d="M8.529 4.758v.76A2.296 2.296 0 0 1 6.587 4.11h1.296a.65.65 0 0 1 .646.648" opacity=".2"/><path fill="currentColor" d="M8.176 4.758v.704A2.3 2.3 0 0 1 6.587 4.11h.943a.65.65 0 0 1 .646.647" opacity=".2"/><path fill="url(#b)" d="M1.056 4.11h6.473c.357 0 .647.291.647.65v6.483c0 .358-.29.648-.647.648H1.056a.65.65 0 0 1-.647-.648V4.76c0-.358.29-.648.647-.648"/><path fill="#fff" d="M5.995 6.579H4.702v3.53h-.825v-3.53H2.59v-.685h3.406z"/></g><defs><linearGradient id="b" x1="1.758" x2="6.84" y1="3.604" y2="12.39" gradientUnits="userSpaceOnUse"><stop stop-color="#5A62C3"/><stop offset=".5" stop-color="#4D55BD"/><stop offset="1" stop-color="#3940AB"/></linearGradient></defs>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsColorComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}