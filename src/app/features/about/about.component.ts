import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { NewsletterComponent } from '../../shared/newsletter/newsletter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent, NewsletterComponent],
  template: `
    <div class="pt-16 lg:pt-20">
      <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'About' }]" />

        <div class="mt-8 mb-12">
          <h1 class="editorial-title">About Manetho</h1>
        </div>

        <div class="article-content max-w-reading space-y-8">
          <p class="font-serif text-xl text-charcoal-700 dark:text-ivory-200 leading-relaxed">
            Manetho is a digital publication dedicated to making the history of Ancient Egypt accessible without sacrificing the complexity of the evidence behind it.
          </p>

          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100">Our Mission</h2>
          <p>
            We believe that the history of Ancient Egypt belongs to everyone. For too long, serious Egyptology has been locked behind academic paywalls, while popular accounts have often sacrificed accuracy for entertainment. Manetho exists to bridge that gap — to present the history of Ancient Egypt with scholarly rigor and editorial clarity.
          </p>

          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100">Editorial Philosophy</h2>
          <p>
            Every article published on Manetho is grounded in archaeological evidence and established scholarship. We distinguish carefully between established facts, scholarly interpretations, and unresolved questions. Where evidence is uncertain, we say so. Where scholars disagree, we present the debate.
          </p>
          <p>
            We do not present speculation as fact. We do not fabricate citations. We do not use fake statistics or invented quotes. Our readers deserve better.
          </p>

          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100">Historical Accuracy</h2>
          <p>
            The history of Ancient Egypt is complex, and our understanding of it evolves with each new discovery. We strive to present the current state of knowledge while acknowledging its limits. When new evidence challenges established views, we update our content accordingly.
          </p>
          <p>
            We use careful language to indicate certainty: "archaeological evidence suggests," "scholars generally believe," "the exact circumstances remain uncertain," "according to later Egyptian tradition." These are not hedges — they are honest reflections of what the evidence can and cannot tell us.
          </p>

          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100">Sources</h2>
          <p>
            Our articles draw on peer-reviewed archaeological publications, museum collections, academic institutions, and established reference works. We cite our sources and encourage readers to explore them further. Key sources include:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>The Oxford History of Ancient Egypt (Oxford University Press)</li>
            <li>Journal of Egyptian Archaeology</li>
            <li>Publications of the Metropolitan Museum of Art</li>
            <li>Publications of the Egyptian Museum, Cairo</li>
            <li>British Museum publications and online collection</li>
          </ul>

          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100">The Name</h2>
          <p>
            Manetho was an Egyptian priest and historian who lived in the third century BCE. Working in Greek, he compiled the first comprehensive history of Egypt — the <em>Aegyptiaca</em> — and established the dynastic framework that Egyptologists still use today. His work preserved the names and reigns of hundreds of kings, many known from no other source. We honor his memory by continuing the work he began: making Egypt's history known to the world.
          </p>
        </div>

        <div class="mt-16">
          <app-newsletter />
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}
