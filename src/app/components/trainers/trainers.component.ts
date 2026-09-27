import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRAINERS_DATA } from '../../data/trainers';
import { Trainer } from '../../models/fitness.models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="trainers" class="trainers-section section-padding">
      <div class="container-custom">
        <div class="section-header-flex">
          <div class="section-header">
            <span class="sub-title">// MASTER STRENGTH COACHES</span>
            <h2 class="main-title">COACHED BY THE BEST.</h2>
          </div>
          <p class="lead-text">
            Our coaching roster comprises CSCS-accredited strength coaches and veteran athletic specialists.
          </p>
        </div>

        <div class="trainers-grid">
          @for (trainer of trainers; track trainer.id) {
            <div class="trainer-card">
              <div class="trainer-image-box">
                <img [src]="trainer.image" [alt]="trainer.name" class="trainer-portrait" loading="lazy">
                <div class="trainer-overlay"></div>
                <div class="exp-badge">
                  <span>{{ trainer.experience }}</span>
                </div>
              </div>

              <div class="trainer-info">
                <span class="trainer-role">{{ trainer.role }}</span>
                <h3 class="trainer-name">{{ trainer.name }}</h3>

                <div class="specialties-chips">
                  @for (spec of trainer.specialties; track spec) {
                    <span class="chip">{{ spec }}</span>
                  }
                </div>

                <div class="trainer-actions">
                  <button (click)="modalService.openTrainer(trainer)" class="btn-outline btn-sm">
                    VIEW PROFILE
                  </button>

                  <div class="social-links">
                    <a [href]="trainer.socials.instagram" target="_blank" aria-label="Instagram">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trainers-section {
      background: var(--bg-dark);
    }

    .section-header-flex {
      display: flex;
      flex-direction: column;
      margin-bottom: 3.5rem;

      @media (min-width: 992px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
      }

      .lead-text {
        max-width: 440px;
        font-size: 1rem;
        color: var(--text-muted);
      }
    }

    .trainers-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .trainer-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 2px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all var(--transition-fast);

      &:hover {
        transform: translateY(-8px);
        border-color: var(--border-accent);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

        .trainer-portrait {
          transform: scale(1.06);
        }
      }
    }

    .trainer-image-box {
      position: relative;
      height: 340px;
      width: 100%;
      overflow: hidden;

      .trainer-portrait {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .trainer-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 40%, rgba(18,18,23,0.95) 100%);
      }

      .exp-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: rgba(10, 10, 12, 0.85);
        border: 1px solid var(--border-subtle);
        padding: 0.35rem 0.75rem;
        border-radius: 2px;
        font-family: var(--font-subheading);
        font-size: 0.65rem;
        font-weight: 800;
        letter-spacing: 0.1em;
        color: var(--accent-primary);
      }
    }

    .trainer-info {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex: 1;

      .trainer-role {
        font-family: var(--font-subheading);
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        color: var(--accent-primary);
        margin-bottom: 0.2rem;
      }

      .trainer-name {
        font-family: var(--font-heading);
        font-size: 1.7rem;
        margin-bottom: 1rem;
        line-height: 1;
      }

      .specialties-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: 1.5rem;

        .chip {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          font-size: 0.7rem;
          color: var(--text-muted);
          padding: 0.2rem 0.6rem;
          border-radius: 2px;
        }
      }

      .trainer-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
        padding-top: 1rem;
        border-top: 1px solid var(--border-subtle);

        .btn-sm {
          padding: 0.6rem 1rem;
          font-size: 0.75rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;

          a {
            color: var(--text-muted);
            transition: color var(--transition-fast);

            &:hover {
              color: var(--accent-primary);
            }
          }
        }
      }
    }
  `]
})
export class TrainersComponent {
  modalService = inject(ModalService);
  trainers: Trainer[] = TRAINERS_DATA;
}
