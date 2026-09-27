import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-free-trial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="free-trial-banner">
      <div class="banner-bg" style="background-image: url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=85');"></div>
      <div class="banner-overlay"></div>

      <div class="container-custom banner-content">
        <div class="text-group">
          <span class="sub-title">// NO COMMITMENT • 100% FREE PASS</span>
          <h2 class="banner-title">
            NOT SURE WHERE TO START?<br>
            <span class="accent-text">TRY YOUR FIRST SESSION.</span>
          </h2>
          <p class="banner-desc">
            Experience our competition-grade barbell platforms, sprint tracks, and expert coaching firsthand before deciding.
          </p>
        </div>

        <div class="cta-wrapper">
          <button (click)="modalService.openFreeTrial()" class="btn-primary btn-large">
            BOOK FREE TRIAL NOW
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .free-trial-banner {
      position: relative;
      padding: 6rem 0;
      background: var(--bg-dark);
      overflow: hidden;
    }

    .banner-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.4);
    }

    .banner-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.75) 50%, rgba(10,10,12,0.95) 100%);
    }

    .banner-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2.5rem;

      @media (min-width: 992px) {
        flex-direction: row;
        text-align: left;
        justify-content: space-between;
      }
    }

    .sub-title {
      color: var(--accent-primary);
      font-family: var(--font-subheading);
      font-weight: 800;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      display: block;
      margin-bottom: 0.5rem;
    }

    .banner-title {
      font-family: var(--font-heading);
      font-size: clamp(2.5rem, 5vw, 4rem);
      line-height: 0.95;
      margin-bottom: 1rem;

      .accent-text {
        color: var(--accent-primary);
      }
    }

    .banner-desc {
      color: var(--text-muted);
      font-size: 1.05rem;
      max-width: 540px;
    }

    .btn-large {
      padding: 1.3rem 2.8rem;
      font-size: 1.05rem;
      white-space: nowrap;
    }
  `]
})
export class FreeTrialComponent {
  modalService = inject(ModalService);
}
