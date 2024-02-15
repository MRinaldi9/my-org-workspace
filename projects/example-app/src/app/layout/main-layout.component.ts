import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'my-org-main-layout',
  standalone: true,
  imports: [
    MatToolbarModule,
    NgOptimizedImage,
    RouterLink,
    TitleCasePipe,
    RouterLinkActive,
    MatButtonModule,
    RouterOutlet,
  ],
  template: `
    <mat-toolbar class="fixed shadow-lg !bg-white">
      <div class="container mx-auto px-10">
        <div class="flex justify-between">
          <a
            href="https://angularexperts.io"
            target="_blank"
            class="hidden md:inline"
          >
            <img
              height="60"
              width="168"
              priority
              ngSrc="https://angularexperts.io/assets/images/logo/angular-experts.svg"
              alt="Angular Experts Logo"
            />
          </a>
          <a href="https://angularexperts.io" target="_blank" class="md:hidden">
            <img
              height="48"
              width="48"
              priority
              ngSrc="https://angularexperts.io/assets/images/logo/angular-experts.svg"
              alt="Angular Experts Logo"
            />
          </a>
          <div class="flex items-center gap-4">
            @for (route of ['home']; track $index) {
              <a
                #rla="routerLinkActive"
                routerLinkActive
                mat-flat-button
                [routerLink]="['/', route]"
                [color]="rla.isActive ? 'accent' : 'primary'"
                >{{ route | titlecase }}</a
              >
            }
          </div>
        </div>
      </div>
    </mat-toolbar>
    <main class="container mx-auto mt-16 p-10">
      <router-outlet />
    </main>
    <footer class="mt-auto p-10 bg-white">
      <div class="container mx-auto text-center">My Org</div>
    </footer>
  `,
  styles: `
    :host {
      @apply flex flex-col min-h-screen bg-gray-100;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
