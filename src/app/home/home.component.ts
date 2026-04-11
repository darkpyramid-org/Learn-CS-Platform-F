import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero.component';
import { LogosComponent } from './sections/logos.component';
import { FeaturesComponent } from './sections/features.component';
import { HowItWorksComponent } from './sections/how-it-works.component';
import { StatsComponent } from './sections/stats.component';
import { TestimonialsComponent } from './sections/testimonials.component';
import { PricingComponent } from './sections/pricing.component';
import { CtaComponent } from './sections/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    LogosComponent,
    FeaturesComponent,
    HowItWorksComponent,
    StatsComponent,
    TestimonialsComponent,
    PricingComponent,
    CtaComponent,
  ],
  template: `
    <app-hero />
    <app-logos />
    <app-features />
    <app-how-it-works />
    <app-stats />
    <app-testimonials />
    <app-pricing />
    <app-cta />
  `,
})
export class HomeComponent {}
