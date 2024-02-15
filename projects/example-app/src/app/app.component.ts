import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout.component';

@Component({
  selector: 'my-org-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: ` <my-org-main-layout /> `,
  styles: '',
})
export class AppComponent {
  title = 'example-app';
}
