import { Component, AfterViewInit, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing" class="relative py-28 overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-30"></div>
      <div class="glow-orb-orange w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-on-scroll">
          <span class="section-badge mb-5">Pricing</span>
          <h2 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mt-4 mb-6">
            Simple, transparent<br/>
            <span class="gradient-text-orange">pricing that scales.</span>
          </h2>
          <p class="max-w-xl mx-auto text-lg text-white/50 mb-10">
            Start for free. Upgrade when you're ready to scale.
          </p>

          <div class="inline-flex items-center gap-1 p-1 rounded-full border border-white/[0.08]" style="background: rgba(255,255,255,0.03)">
            <button
              class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              [class.text-white]="!annual()"
              [class.text-white-60]="annual()"
              [style.background]="!annual() ? 'linear-gradient(135deg, #f97316, #ef4444)' : 'transparent'"
              [style.color]="annual() ? 'rgba(255,255,255,0.5)' : 'white'"
              (click)="annual.set(false)"
            >Monthly</button>
            <button
              class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2"
              [style.background]="annual() ? 'linear-gradient(135deg, #f97316, #ef4444)' : 'transparent'"
              [style.color]="!annual() ? 'rgba(255,255,255,0.5)' : 'white'"
              (click)="annual.set(true)"
            >
              Annual
              <span class="text-xs px-2 py-0.5 rounded-full font-bold" style="background: rgba(249,115,22,0.2); color: #fb923c">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          @for (plan of plans; track plan.name; let i = $index) {
            <div
              class="relative rounded-2xl p-8 flex flex-col animate-on-scroll"
              [class.ring-2]="plan.popular"
              [style.ring-color]="plan.popular ? '#f97316' : 'transparent'"
              [style.background]="plan.popular ? 'rgba(249,115,22,0.06)' : 'rgba(255,255,255,0.03)'"
              [style.border]="plan.popular ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(255,255,255,0.07)'"
              [style.box-shadow]="plan.popular ? '0 0 60px rgba(249,115,22,0.1), inset 0 1px 0 rgba(249,115,22,0.15)' : '0 4px 32px rgba(0,0,0,0.4)'"
              [style.transition-delay]="(i * 120) + 'ms'"
            >
              @if (plan.popular) {
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div class="px-4 py-1 rounded-full text-xs font-bold text-white" style="background: linear-gradient(135deg, #f97316, #ef4444)">
                    Most popular
                  </div>
                </div>
              }

              <div class="mb-8">
                <div class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">{{ plan.name }}</div>
                <div class="flex items-end gap-2 mb-3">
                  <div class="text-5xl font-extrabold font-display text-white">
                    {{ annual() ? plan.annualPrice : plan.price }}
                  </div>
                  @if (plan.price !== 'Free') {
                    <div class="text-white/40 text-sm pb-2">/ month</div>
                  }
                </div>
                <p class="text-sm text-white/50 leading-relaxed">{{ plan.description }}</p>
              </div>

              <a
                href="#"
                class="w-full text-center py-3.5 rounded-full font-semibold text-sm mb-8 transition-all duration-300"
                [class.btn-primary]="plan.popular"
                [style.background]="!plan.popular ? 'rgba(255,255,255,0.06)' : ''"
                [style.color]="!plan.popular ? 'rgba(255,255,255,0.8)' : ''"
                [style.border]="!plan.popular ? '1px solid rgba(255,255,255,0.12)' : ''"
              >{{ plan.cta }}</a>

              <div class="space-y-3 flex-1">
                @for (feature of plan.features; track feature) {
                  <div class="flex items-center gap-3">
                    <svg class="w-4 h-4 flex-shrink-0" [style.color]="plan.popular ? '#f97316' : '#34d399'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="text-sm text-white/65">{{ feature }}</span>
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <p class="text-center mt-10 text-sm text-white/30">
          All plans include SSL, custom domains, and 99.99% uptime SLA. No hidden fees.
        </p>
      </div>
    </section>
  `,
})
export class PricingComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  annual = signal(false);

  plans = [
    {
      name: 'Hobby',
      price: 'Free',
      annualPrice: 'Free',
      description: 'Perfect for personal projects and learning. No credit card required.',
      cta: 'Start for free',
      popular: false,
      features: [
        '3 projects',
        '100 deployments/month',
        'Shared compute',
        '1 GB bandwidth',
        'Community support',
        'Custom domains',
        'SSL certificates',
      ],
    },
    {
      name: 'Pro',
      price: '$29',
      annualPrice: '$23',
      description: 'For serious builders and growing startups who need more power.',
      cta: 'Start free trial',
      popular: true,
      features: [
        'Unlimited projects',
        'Unlimited deployments',
        'Dedicated compute',
        '100 GB bandwidth',
        'Priority support',
        'Preview environments',
        'Team collaboration (5 seats)',
        'Advanced analytics',
        'Custom build config',
      ],
    },
    {
      name: 'Enterprise',
      price: '$149',
      annualPrice: '$119',
      description: 'For teams at scale who need enterprise-grade security and support.',
      cta: 'Contact sales',
      popular: false,
      features: [
        'Everything in Pro',
        'Unlimited seats',
        'SOC 2 Type II',
        'SAML SSO',
        'Custom SLA',
        'Dedicated support',
        'Audit logs',
        'Private networking',
        'On-premise option',
      ],
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    this.el.nativeElement.querySelectorAll('.animate-on-scroll').forEach((el: Element) => observer.observe(el));
  }
}
