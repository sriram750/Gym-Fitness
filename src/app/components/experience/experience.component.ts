import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-section section-padding">
      <div class="container-custom">
        <div class="experience-card">
          <div class="exp-bg" style="background-image: url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=85');"></div>
          <div class="exp-overlay"></div>
          
          <div class="exp-content">
            <span class="sub-title">// CINEMATIC EXPERIENCE</span>
            <h2 class="exp-title">
              THIS IS<br>
              <span class="accent-text">YOUR PLAYGROUND.</span>
            </h2>

            <p class="exp-lead">
              18,000 square feet of competition-calibrated steel, dynamic turf tracks, assault cardio decks, boxing octagons, and cold plunge recovery suites.
            </p>

            <div class="exp-tags">
              <span>WEIGHT TRAINING</span>
              <span class="dot">•</span>
              <span>CARDIO DECK</span>
              <span class="dot">•</span>
              <span>FUNCTIONAL TURF</span>
              <span class="dot">•</span>
              <span>BOXING OCTAGON</span>
              <span class="dot">•</span>
              <span>SAUNA & RECOVERY</span>
            </div>

            <!-- WATCH EXPERIENCE BUTTON -->
            <button (click)="openVideoModal()" class="btn-play-exp">
              <div class="play-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <div class="play-text-group">
                <span class="play-title">WATCH EXPERIENCE ▶</span>
                <span class="play-sub">2 MIN VIRTUAL FACILITY TOUR</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      background: var(--bg-surface);
    }

    .experience-card {
      position: relative;
      width: 100%;
      min-height: 580px;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      padding: 4rem 3.5rem;

      @media (max-width: 768px) {
        padding: 3rem 1.75rem;
      }
    }

    .exp-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.6);
      transition: transform 1s ease;

      &:hover {
        transform: scale(1.03);
      }
    }

    .exp-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.7) 60%, rgba(10,10,12,0.3) 100%);
    }

    .exp-content {
      position: relative;
      z-index: 2;
      max-width: 700px;
    }

    .exp-title {
      font-family: var(--font-heading);
      font-size: clamp(3rem, 6vw, 5rem);
      margin-top: 0.5rem;
      margin-bottom: 1.25rem;

      .accent-text {
        color: var(--accent-primary);
      }
    }

    .exp-lead {
      color: var(--text-white);
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .exp-tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
      font-family: var(--font-subheading);
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--text-muted);
      margin-bottom: 3rem;

      .dot {
        color: var(--accent-primary);
      }
    }

    .btn-play-exp {
      display: inline-flex;
      align-items: center;
      gap: 1.25rem;
      background: rgba(10, 10, 12, 0.85);
      border: 1px solid var(--border-accent);
      padding: 1.25rem 2.25rem;
      border-radius: 4px;
      cursor: pointer;
      backdrop-filter: blur(12px);
      transition: all var(--transition-fast);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

      &:hover {
        background: var(--accent-primary);
        border-color: var(--accent-primary);
        transform: translateY(-4px);

        .play-icon-circle {
          background: var(--text-white);
          color: var(--accent-primary);
        }

        .play-title {
          color: var(--text-white);
        }
      }

      .play-icon-circle {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: var(--accent-primary);
        color: var(--text-white);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all var(--transition-fast);
      }

      .play-text-group {
        display: flex;
        flex-direction: column;
        text-align: left;

        .play-title {
          font-family: var(--font-subheading);
          font-size: 1.05rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: var(--text-white);
        }

        .play-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          font-weight: 600;
        }
      }
    }
  `]
})
export class ExperienceComponent {
  modalService = inject(ModalService);

  openVideoModal() {
    this.modalService.openVideo('https://assets.mixkit.co/videos/preview/mixkit-man-runs-on-the-treadmill-at-the-gym-41558-large.mp4');
  }
}
