import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROGRAMS_DATA } from '../../data/programs';
import { Program } from '../../models/fitness.models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-program-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="showcase-section section-padding">
      <div class="container-custom">
        <div class="section-header text-center">
          <span class="sub-title">// INTERACTIVE PROGRAM MATRIX</span>
          <h2 class="main-title">EXPLORE THE SPECTRUM.</h2>
        </div>

        <!-- TABS NAV -->
        <div class="showcase-tabs">
          @for (prog of programs; track prog.id) {
            <button 
              class="tab-btn" 
              [class.active]="selectedId() === prog.id"
              (click)="selectProgram(prog.id)"
            >
              {{ prog.category }}
            </button>
          }
        </div>

        <!-- ACTIVE SHOWCASE DISPLAY -->
        @if (activeProgram(); as prog) {
          <div class="showcase-stage">
            <div class="showcase-bg" [style.background-image]="'url(' + prog.image + ')'"></div>
            <div class="showcase-overlay"></div>

            <div class="showcase-content">
              <div class="showcase-badge">
                <span class="badge-tag">{{ prog.category }} • {{ prog.intensity }}</span>
              </div>

              <h3 class="showcase-title">{{ prog.title }}</h3>
              <p class="showcase-subtitle">{{ prog.subtitle }}</p>
              <p class="showcase-desc">{{ prog.longDescription }}</p>

              <div class="benefits-grid">
                @for (benefit of prog.benefits; track benefit) {
                  <div class="benefit-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{{ benefit }}</span>
                  </div>
                }
              </div>

              <div class="showcase-actions">
                <div class="meta-pill">
                  <span class="meta-label">SCHEDULE</span>
                  <span class="meta-val">{{ prog.schedule }}</span>
                </div>
                <div class="meta-pill">
                  <span class="meta-label">EST. BURN</span>
                  <span class="meta-val">{{ prog.caloriesBurn }}</span>
                </div>
                <button (click)="modalService.openFreeTrial()" class="btn-primary">
                  CLAIM TRIAL SESSION
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .showcase-section {
      background: var(--bg-dark);
    }

    .text-center {
      text-align: center;
    }

    .showcase-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 3rem;

      .tab-btn {
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        color: var(--text-muted);
        font-family: var(--font-subheading);
        font-size: 0.85rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        padding: 0.75rem 1.5rem;
        border-radius: 2px;
        cursor: pointer;
        transition: all var(--transition-fast);

        &:hover, &.active {
          background: var(--accent-primary);
          color: var(--text-white);
          border-color: var(--accent-primary);
          box-shadow: 0 4px 20px var(--accent-glow);
        }
      }
    }

    .showcase-stage {
      position: relative;
      min-height: 540px;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid var(--border-subtle);
      display: flex;
      align-items: flex-end;
      padding: 3.5rem 3rem;

      @media (max-width: 768px) {
        padding: 2rem 1.5rem;
      }
    }

    .showcase-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: all 0.6s ease;
      filter: brightness(0.65);
    }

    .showcase-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(10,10,12,0.3) 0%, rgba(10,10,12,0.92) 80%);
    }

    .showcase-content {
      position: relative;
      z-index: 2;
      max-width: 800px;

      .showcase-title {
        font-family: var(--font-heading);
        font-size: clamp(2.5rem, 5vw, 4.2rem);
        margin-top: 0.75rem;
        margin-bottom: 0.25rem;
      }

      .showcase-subtitle {
        font-family: var(--font-subheading);
        font-size: 1.15rem;
        color: var(--accent-primary);
        font-weight: 700;
        margin-bottom: 1.25rem;
      }

      .showcase-desc {
        color: var(--text-white);
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 2.5rem;

      @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .benefit-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-white);
      }
    }

    .showcase-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.5rem;

      .meta-pill {
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border-subtle);
        padding: 0.6rem 1.2rem;
        border-radius: 2px;

        .meta-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .meta-val {
          font-family: var(--font-subheading);
          font-size: 0.85rem;
          color: var(--text-white);
          font-weight: 800;
        }
      }
    }
  `]
})
export class ProgramShowcaseComponent {
  modalService = inject(ModalService);
  programs: Program[] = PROGRAMS_DATA;
  selectedId = signal('strength');

  activeProgram = signal<Program | undefined>(
    PROGRAMS_DATA.find(p => p.id === 'strength')
  );

  selectProgram(id: string) {
    this.selectedId.set(id);
    this.activeProgram.set(this.programs.find(p => p.id === id));
  }
}
