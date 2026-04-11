import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app/app.routes';
import { NavbarComponent } from './app/components/navbar.component';
import { FooterComponent } from './app/components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TuiRoot, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <tui-root>
      <div class="noise-overlay"></div>
      <app-navbar />
      <main>
        <router-outlet />
      </main>
      <app-footer />
    </tui-root>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes),
  ],
});
