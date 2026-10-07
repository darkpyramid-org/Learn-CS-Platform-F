import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen">
      <!-- Header -->
      <header class="bg-charcoal-50 dark:bg-charcoal-900/50 py-12 md:py-16 border-b border-charcoal-200 dark:border-charcoal-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-4">
            <a routerLink="/" class="text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100">
              ← Back to Home
            </a>
          </div>
          <h1 class="editorial-title mb-4">About Manetho</h1>
        </div>
      </header>

      <!-- Content -->
      <div class="py-12 md:py-16">
        <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <!-- What is Manetho -->
          <section>
            <h2 class="section-header mb-6">What is Manetho?</h2>
            <p class="text-lg leading-relaxed text-charcoal-700 dark:text-ivory-300 mb-6">
              Manetho is a digital journal dedicated to making the history of Ancient Egypt accessible without sacrificing the complexity of the evidence behind it. We believe that historical scholarship should be rigorously grounded in evidence, yet written in a way that engages and enlightens a broad audience.
            </p>
            <p class="text-lg leading-relaxed text-charcoal-700 dark:text-ivory-300">
              The name honors Manetho, an ancient Egyptian priest and historian who lived in the third century BCE. His compilation of Egyptian dynasties remains the foundational framework for understanding pharaonic history—a reminder that the study of Egypt's past is itself a tradition stretching back millennia.
            </p>
          </section>

          <!-- Editorial Philosophy -->
          <section class="p-8 rounded-lg bg-charcoal-50 dark:bg-charcoal-900/50 border border-charcoal-200 dark:border-charcoal-700">
            <h2 class="section-header mb-6">Editorial Philosophy</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-3">
                  Intellectual Honesty
                </h3>
                <p class="text-charcoal-700 dark:text-ivory-300">
                  We distinguish clearly between established historical facts, scholarly interpretation, and unsolved mysteries. When evidence is ambiguous or competing theories exist, we say so. We never present speculation as certainty.
                </p>
              </div>

              <div>
                <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-3">
                  Evidence-Based Narrative
                </h3>
                <p class="text-charcoal-700 dark:text-ivory-300">
                  Every article is grounded in primary sources, archaeological evidence, and scholarly research. We cite our sources and encourage readers to explore the evidence themselves. History should be transparent.
                </p>
              </div>

              <div>
                <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-3">
                  Accessible Scholarship
                </h3>
                <p class="text-charcoal-700 dark:text-ivory-300">
                  Academic rigor doesn't require incomprehensible prose. We write for intelligent readers who want to understand history deeply, not just superficially. Complex ideas deserve clear explanation.
                </p>
              </div>

              <div>
                <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-3">
                  Respect for Complexity
                </h3>
                <p class="text-charcoal-700 dark:text-ivory-300">
                  Ancient Egypt was a complex civilization spanning three thousand years. We avoid oversimplification and recognize that cultures change over time. The Egypt of the New Kingdom was different from the Egypt of the Old Kingdom.
                </p>
              </div>
            </div>
          </section>

          <!-- What We Cover -->
          <section>
            <h2 class="section-header mb-6">What We Cover</h2>
            <p class="text-lg leading-relaxed text-charcoal-700 dark:text-ivory-300 mb-6">
              Manetho explores Ancient Egypt across multiple dimensions:
            </p>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex gap-4">
                <span class="text-2xl flex-shrink-0">📚</span>
                <div>
                  <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">History</h3>
                  <p class="text-charcoal-700 dark:text-ivory-300">
                    Political developments, dynasties, military campaigns, and the evolution of Egyptian civilization across six thousand years.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <span class="text-2xl flex-shrink-0">🔨</span>
                <div>
                  <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">Archaeology</h3>
                  <p class="text-charcoal-700 dark:text-ivory-300">
                    Archaeological discoveries, excavation methods, the evidence behind our understanding, and ongoing research.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <span class="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">Mythology & Religion</h3>
                  <p class="text-charcoal-700 dark:text-ivory-300">
                    Egyptian gods, religious practices, beliefs about the afterlife, and how religion shaped daily life.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <span class="text-2xl flex-shrink-0">👑</span>
                <div>
                  <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">People & Culture</h3>
                  <p class="text-charcoal-700 dark:text-ivory-300">
                    Pharaohs and their achievements, daily life, family structures, and the rich cultural heritage of Ancient Egypt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Standards & Practices -->
          <section class="p-8 rounded-lg bg-charcoal-50 dark:bg-charcoal-900/50 border border-charcoal-200 dark:border-charcoal-700">
            <h2 class="section-header mb-6">Our Standards & Practices</h2>
            <ul class="space-y-4">
              <li class="flex gap-3">
                <span class="text-gold-600 mt-1">✓</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Primary Sources:</strong> We prioritize primary documents, inscriptions, and archaeological evidence when available.
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600 mt-1">✓</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Scholarly Consensus:</strong> We reflect current scholarly understanding while acknowledging ongoing debates.
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600 mt-1">✓</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Dating Precision:</strong> We use conventional chronological frameworks while noting areas of uncertainty.
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600 mt-1">✓</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Attribution:</strong> We cite scholars, archaeologists, and historians whose work informs our articles.
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600 mt-1">✓</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>No Speculation:</strong> We do not present unsubstantiated theories or pseudoscientific claims as history.
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600 mt-1">✓</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Transparency:</strong> We explain our sources and invite readers to verify our claims.
                </span>
              </li>
            </ul>
          </section>

          <!-- Sources & Resources -->
          <section>
            <h2 class="section-header mb-6">Sources & Resources</h2>
            <p class="text-lg leading-relaxed text-charcoal-700 dark:text-ivory-300 mb-6">
              Our research draws from:
            </p>
            <ul class="space-y-3">
              <li class="flex gap-3">
                <span class="text-gold-600">•</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Museum Collections:</strong> The Egyptian Museum, Louvre, Metropolitan Museum, and other institutions
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600">•</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Academic Publications:</strong> Peer-reviewed journals and university presses
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600">•</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Archaeological Reports:</strong> Excavation documentation and field research
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600">•</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Primary Texts:</strong> Translations of Egyptian records, hieroglyphic inscriptions, and papyri
                </span>
              </li>
              <li class="flex gap-3">
                <span class="text-gold-600">•</span>
                <span class="text-charcoal-700 dark:text-ivory-300">
                  <strong>Scholarly Books:</strong> Monographs and comprehensive studies by established Egyptologists
                </span>
              </li>
            </ul>
          </section>

          <!-- Contact -->
          <section class="p-8 rounded-lg bg-gradient-to-br from-gold-50 to-charcoal-50 dark:from-gold-900/20 dark:to-charcoal-900/50 border border-gold-200 dark:border-gold-900/30">
            <h2 class="section-header mb-4">Get in Touch</h2>
            <p class="text-charcoal-700 dark:text-ivory-300 mb-6">
              Have questions, suggestions, or corrections? We'd love to hear from you. Manetho is a work in progress, and we welcome feedback from readers and scholars.
            </p>
            <p class="text-charcoal-700 dark:text-ivory-300">
              <a href="mailto:hello@manetho.io" class="text-gold-600 hover:text-gold-700 font-semibold">
                hello@manetho.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
