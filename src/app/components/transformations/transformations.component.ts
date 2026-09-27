import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSFORMATIONS_DATA } from '../../data/transformations';
import { Transformation } from '../../models/fitness.models';

@Component({
  selector: 'app-transformations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="transformation-section section-padding">
      <div class="container-custom">
        <div class="section-header text-center">
          <span class="sub-title">// PROVEN ATHLETE RESULTS</span>
          <h2 class="main-title">THE WORK SHOWS.</h2>
        </div>

        <!-- TRANSFORMATION CAROUSEL / SLIDER SHOWCASE -->
        <div class="transformation-stage">
          @if (activeItem(); as item) {
            <div class="stage-grid">
              <!-- INTERACTIVE BEFORE/AFTER SLIDER -->
              <div class="slider-comparison-col">
                <div class="comparison-container">
                  <div class="before-layer">
                    <img [src]="item.beforeImage" alt="Before Transformation" class="comp-img">
                    <span class="label-badge before">BEFORE</span>
                  </div>
                  <div class="after-layer" [style.clip-path]="'inset(0 ' + (100 - sliderPos()) + '% 0 0)'">
                    <img [src]="item.afterImage" alt="After Transformation" class="comp-img">
                    <span class="label-badge after">AFTER</span>
                  </div>

                  <!-- RANGE DRAG CONTROLLER -->
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    [value]="sliderPos()" 
                    (input)="onSliderMove($event)"
                    class="slider-input" 
                    aria-label="Before and after image comparison slider"
                  >
                  <div class="divider-line" [style.left.%]="sliderPos()">
                    <div class="handle">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="15 18 9 12 15 6"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ATHLETE DETAILS & METRICS -->
              <div class="details-col">
                <div class="athlete-header">
                  <h3 class="athlete-name">{{ item.memberName }}</h3>
                  <span class="program-tag">{{ item.programUsed }}</span>
                </div>

                <div class="stats-metrics-grid">
                  <div class="metric-card">
                    <span class="metric-val">-{{ item.weightLostKg }} KG</span>
                    <span class="metric-label">WEIGHT FAT REDUCTION</span>
                  </div>
                  <div class="metric-card">
                    <span class="metric-val">+{{ item.muscleGainedKg }} KG</span>
                    <span class="metric-label">LEAN MUSCLE GAINED</span>
                  </div>
                  <div class="metric-card">
                    <span class="metric-val">{{ item.durationWeeks }} WKS</span>
                    <span class="metric-label">TIMEFRAME</span>
                  </div>
                  <div class="metric-card">
                    <span class="metric-val">{{ item.coach }}</span>
                    <span class="metric-label">ASSIGNED COACH</span>
                  </div>
                </div>

                <blockquote class="athlete-quote">
                  "{{ item.quote }}"
                </blockquote>

                <!-- CAROUSEL SWITCHER BUTTONS -->
                <div class="carousel-nav">
                  @for (t of transformations; track t.id; let i = $index) {
                    <button 
                      class="nav-dot" 
                      [class.active]="activeIdx() === i"
                      (click)="selectIndex(i)"
                      [attr.aria-label]="'Select transformation ' + t.memberName"
                    >
                      <span class="dot-num">0{{ i + 1 }}</span>
                      <span class="dot-name">{{ t.memberName }}</span>
                    </button>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .transformation-section {
      background: var(--bg-surface);
    }

    .text-center {
      text-align: center;
    }

    .transformation-stage {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 4px;
      padding: 3rem;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);

      @media (max-width: 768px) {
        padding: 1.5rem;
      }
    }

    .stage-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: center;

      @media (min-width: 992px) {
        grid-template-columns: 1fr 1.1fr;
        gap: 4rem;
      }
    }

    /* Before/After Interactive Slider */
    .comparison-container {
      position: relative;
      width: 100%;
      height: 480px;
      overflow: hidden;
      border-radius: 2px;
      border: 1px solid var(--border-subtle);
      user-select: none;

      @media (max-width: 576px) {
        height: 360px;
      }
    }

    .before-layer, .after-layer {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .comp-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .label-badge {
      position: absolute;
      top: 1rem;
      padding: 0.4rem 0.9rem;
      font-family: var(--font-subheading);
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      border-radius: 2px;
      z-index: 5;

      &.before {
        left: 1rem;
        background: rgba(10, 10, 12, 0.85);
        color: var(--text-white);
        border: 1px solid var(--border-subtle);
      }

      &.after {
        right: 1rem;
        background: var(--accent-primary);
        color: var(--text-white);
        box-shadow: 0 4px 15px var(--accent-glow);
      }
    }

    .slider-input {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 10;
      cursor: ew-resize;
    }

    .divider-line {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 3px;
      background: var(--accent-primary);
      z-index: 8;
      pointer-events: none;
      box-shadow: 0 0 10px var(--accent-primary);

      .handle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: var(--accent-primary);
        color: var(--text-white);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 20px rgba(255, 46, 76, 0.6);
      }
    }

    /* Details Col */
    .details-col {
      display: flex;
      flex-direction: column;
    }

    .athlete-header {
      margin-bottom: 2rem;

      .athlete-name {
        font-family: var(--font-heading);
        font-size: clamp(2.5rem, 4vw, 3.5rem);
        line-height: 0.95;
      }

      .program-tag {
        font-family: var(--font-subheading);
        font-size: 0.85rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        color: var(--accent-primary);
      }
    }

    .stats-metrics-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-bottom: 2rem;

      .metric-card {
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        padding: 1rem 1.25rem;
        border-radius: 2px;
        display: flex;
        flex-direction: column;

        .metric-val {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--accent-primary);
          line-height: 1;
        }

        .metric-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-top: 0.2rem;
        }
      }
    }

    .athlete-quote {
      font-size: 1.05rem;
      color: var(--text-white);
      font-style: italic;
      line-height: 1.6;
      border-left: 3px solid var(--accent-primary);
      padding-left: 1.25rem;
      margin-bottom: 2.5rem;
    }

    .carousel-nav {
      display: flex;
      gap: 1rem;
      border-top: 1px solid var(--border-subtle);
      padding-top: 1.5rem;

      .nav-dot {
        background: transparent;
        border: 1px solid var(--border-subtle);
        padding: 0.6rem 1.2rem;
        border-radius: 2px;
        color: var(--text-muted);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all var(--transition-fast);

        &:hover, &.active {
          border-color: var(--accent-primary);
          color: var(--text-white);
          background: rgba(255, 46, 76, 0.1);

          .dot-num {
            color: var(--accent-primary);
          }
        }

        .dot-num {
          font-family: var(--font-heading);
          font-size: 1.1rem;
        }

        .dot-name {
          font-family: var(--font-subheading);
          font-size: 0.75rem;
          font-weight: 800;
        }
      }
    }
  `]
})
export class TransformationsComponent {
  transformations: Transformation[] = TRANSFORMATIONS_DATA;
  activeIdx = signal(0);
  sliderPos = signal(50);

  activeItem = signal<Transformation>(TRANSFORMATIONS_DATA[0]);

  selectIndex(idx: number) {
    this.activeIdx.set(idx);
    this.activeItem.set(this.transformations[idx]);
    this.sliderPos.set(50);
  }

  onSliderMove(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.sliderPos.set(Number(val));
  }
}
