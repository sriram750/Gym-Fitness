import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROGRAMS_DATA } from '../../data/programs';
import { Program } from '../../models/fitness.models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="programs" class="programs-section section-padding">
      <div class="container-custom">
        <div class="section-header-flex">
          <div class="section-header">
            <span class="sub-title">// HIGH PERFORMANCE REGIMENS</span>
            <h2 class="main-title">TRAIN YOUR WAY.</h2>
          </div>
          <p class="section-lead-text">
            Engineered workouts designed for peak physiological response. Select your discipline below.
          </p>
        </div>

        <!-- PROGRAM CARDS GRID / MOBILE HORIZONTAL SCROLL -->
        <div class="programs-grid">
          @for (program of programs; track program.id) {
            <div class="program-card" (click)="modalService.openProgram(program)">
              <div class="card-image-wrapper">
                <img [src]="program.image" [alt]="program.title" class="program-img" loading="lazy">
                <div class="card-overlay"></div>
                <div class="intensity-badge">
                  <span>{{ program.intensity }}</span>
                </div>
              </div>

              <div class="card-content">
                <span class="program-cat">{{ program.category }}</span>
                <h3 class="program-title">{{ program.title }}</h3>
                <p class="program-desc">{{ program.description }}</p>

                <div class="card-footer">
                  <div class="stat-meta">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>{{ program.duration }}</span>
                  </div>
                  <span class="btn-explore">
                    EXPLORE
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .programs-section {
      background: var(--bg-surface);
      position: relative;
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

      .section-lead-text {
        max-width: 420px;
        font-size: 1.05rem;
        margin-bottom: 3.5rem;

        @media (min-width: 992px) {
          margin-bottom: 0;
        }
      }
    }

    .programs-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .program-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 2px;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);

      &:hover {
        transform: translateY(-8px);
        border-color: var(--border-accent);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

        .program-img {
          transform: scale(1.08);
        }

        .btn-explore {
          color: var(--accent-primary);
          transform: translateX(4px);
        }
      }
    }

    .card-image-wrapper {
      position: relative;
      width: 100%;
      height: 240px;
      overflow: hidden;

      .program-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(21,21,28,0.9) 100%);
      }

      .intensity-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(10, 10, 12, 0.85);
        border: 1px solid var(--border-subtle);
        padding: 0.35rem 0.85rem;
        border-radius: 2px;
        font-family: var(--font-subheading);
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.1em;
        color: var(--accent-primary);
      }
    }

    .card-content {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      flex: 1;

      .program-cat {
        font-family: var(--font-subheading);
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        color: var(--accent-primary);
        margin-bottom: 0.4rem;
      }

      .program-title {
        font-family: var(--font-heading);
        font-size: 1.8rem;
        margin-bottom: 0.75rem;
        line-height: 1;
      }

      .program-desc {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin-bottom: 1.75rem;
        flex: 1;
      }

      .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 1.25rem;
        border-top: 1px solid var(--border-subtle);

        .stat-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .btn-explore {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-subheading);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--text-white);
          transition: all var(--transition-fast);
        }
      }
    }
  `]
})
export class ProgramsComponent {
  modalService = inject(ModalService);
  programs: Program[] = PROGRAMS_DATA;
}
