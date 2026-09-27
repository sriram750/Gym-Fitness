import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQ_DATA } from '../../data/faq';
import { FAQItem } from '../../models/fitness.models';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="faq-section section-padding">
      <div class="container-custom">
        <div class="section-header text-center">
          <span class="sub-title">// CLEAR ANSWERS</span>
          <h2 class="main-title">FREQUENTLY ASKED QUESTIONS.</h2>
        </div>

        <div class="faq-accordion-container">
          @for (faq of faqs; track faq.id) {
            <div class="faq-item" [class.open]="openId() === faq.id">
              <button class="faq-question" (click)="toggleFaq(faq.id)">
                <span class="question-text">{{ faq.question }}</span>
                <span class="faq-icon" [class.rotated]="openId() === faq.id">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </span>
              </button>

              <div class="faq-answer-wrapper" [class.expanded]="openId() === faq.id">
                <p class="faq-answer-text">{{ faq.answer }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-section {
      background: var(--bg-surface);
    }

    .text-center {
      text-align: center;
    }

    .faq-accordion-container {
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .faq-item {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 2px;
      overflow: hidden;
      transition: all var(--transition-fast);

      &.open {
        border-color: var(--border-accent);
        box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      }
    }

    .faq-question {
      width: 100%;
      background: transparent;
      border: none;
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      text-align: left;
      cursor: pointer;
      color: var(--text-white);

      .question-text {
        font-family: var(--font-subheading);
        font-size: 1.1rem;
        font-weight: 800;
        line-height: 1.4;
      }

      .faq-icon {
        color: var(--accent-primary);
        transition: transform 0.3s ease;
        min-width: 24px;

        &.rotated {
          transform: rotate(45deg);
        }
      }
    }

    .faq-answer-wrapper {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0, 1, 0, 1), opacity 0.3s ease;
      opacity: 0;

      &.expanded {
        max-height: 250px;
        opacity: 1;
        padding: 0 2rem 1.5rem 2rem;
      }

      .faq-answer-text {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0;
      }
    }
  `]
})
export class FaqComponent {
  faqs: FAQItem[] = FAQ_DATA;
  openId = signal<string | null>('faq-1');

  toggleFaq(id: string) {
    this.openId.update(curr => curr === id ? null : id);
  }
}
