import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="final-cta-section">
      <div class="cta-bg-image" style="background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85');"></div>
      <div class="cta-dark-overlay"></div>
      <div class="grain-overlay"></div>

      <div class="container-custom cta-content-wrapper">
        <span class="sub-title">// NO MORE EXCUSES</span>
        <h2 class="cta-main-heading">
          STOP WAITING.<br>
          <span class="gradient-accent">START BUILDING.</span>
        </h2>
        
        <p class="cta-body-text">
          Join Chennai's premier strength & high-performance training sanctuary. Your transformation is one decision away.
        </p>

        <div class="cta-buttons-group">
          <button (click)="modalService.openFreeTrial()" class="btn-primary btn-cta">
            START TRAINING NOW
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <a routerLink="/contact" class="btn-outline btn-cta">
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .final-cta-section {
      position: relative;
      padding: 9rem 0;
      background: var(--bg-dark);
      overflow: hidden;

      @media (max-width: 768px) {
        padding: 6rem 0;
      }
    }

    .cta-bg-image {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.35);
    }

    .cta-dark-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(10,10,12,0.9) 0%, rgba(10,10,12,0.65) 50%, rgba(10,10,12,0.95) 100%);
    }

    .cta-content-wrapper {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 900px;
    }

    .sub-title {
      color: var(--accent-primary);
      font-family: var(--font-subheading);
      font-weight: 800;
      font-size: 0.9rem;
      letter-spacing: 0.2em;
      margin-bottom: 0.75rem;
    }

    .cta-main-heading {
      font-family: var(--font-heading);
      font-size: clamp(3.5rem, 8vw, 6.5rem);
      line-height: 0.92;
      margin-bottom: 1.5rem;

      .gradient-accent {
        background: linear-gradient(135deg, #ffffff 0%, var(--accent-primary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .cta-body-text {
      font-size: clamp(1.05rem, 2vw, 1.3rem);
      color: var(--text-muted);
      max-width: 620px;
      margin-bottom: 3rem;
    }

    .cta-buttons-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
    }

    .btn-cta {
      padding: 1.25rem 2.6rem;
      font-size: 1rem;
    }
  `]
})
export class FinalCtaComponent {
  modalService = inject(ModalService);
}
