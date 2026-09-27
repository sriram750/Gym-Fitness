import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="bmi-section section-padding">
      <div class="container-custom">
        <div class="bmi-card-wrapper">
          <div class="bmi-grid">
            <!-- LEFT INPUT FORM -->
            <div class="bmi-form-col">
              <span class="sub-title">// SCIENTIFIC BODY METRICS</span>
              <h2 class="bmi-title">INTERACTIVE BMI METER</h2>
              <p class="bmi-desc">
                Calculate your Body Mass Index (BMI) to determine baseline caloric and training intensity targets.
              </p>

              <!-- GENDER SELECTOR -->
              <div class="form-group">
                <label class="input-label">GENDER</label>
                <div class="gender-toggle">
                  <button 
                    type="button" 
                    class="gender-btn" 
                    [class.active]="gender() === 'male'"
                    (click)="gender.set('male')"
                  >
                    MALE
                  </button>
                  <button 
                    type="button" 
                    class="gender-btn" 
                    [class.active]="gender() === 'female'"
                    (click)="gender.set('female')"
                  >
                    FEMALE
                  </button>
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="input-label">AGE (YEARS)</label>
                  <input type="number" [(ngModel)]="age" min="15" max="90" class="custom-input">
                </div>

                <div class="form-group">
                  <label class="input-label">HEIGHT (CM)</label>
                  <input type="number" [(ngModel)]="heightCm" min="100" max="230" class="custom-input">
                </div>
              </div>

              <div class="form-group">
                <label class="input-label">WEIGHT (KG)</label>
                <input type="number" [(ngModel)]="weightKg" min="30" max="220" class="custom-input">
              </div>
            </div>

            <!-- RIGHT BMI DISPLAY & METER -->
            <div class="bmi-result-col">
              <div class="result-display-box">
                <span class="res-sub">YOUR CALCULATED BMI</span>
                <span class="res-value">{{ bmi() }}</span>
                <span class="res-category" [style.color]="categoryColor()">{{ category() }}</span>

                <!-- VISUAL BMI METER SCALE -->
                <div class="meter-wrapper">
                  <div class="meter-bar">
                    <div class="zone underweight" title="Underweight (< 18.5)"></div>
                    <div class="zone normal" title="Normal (18.5 - 24.9)"></div>
                    <div class="zone overweight" title="Overweight (25 - 29.9)"></div>
                    <div class="zone obese" title="Obese (>= 30)"></div>
                  </div>
                  <div class="meter-pointer" [style.left.%]="meterPercent()"></div>
                </div>

                <p class="journey-banner">
                  YOUR FITNESS JOURNEY STARTS HERE.
                </p>

                <button (click)="modalService.openFreeTrial()" class="btn-primary w-full">
                  TRANSFORM YOUR BODY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bmi-section {
      background: var(--bg-surface);
    }

    .bmi-card-wrapper {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 4px;
      padding: 3.5rem;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);

      @media (max-width: 768px) {
        padding: 2rem 1.5rem;
      }
    }

    .bmi-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3.5rem;
      align-items: center;

      @media (min-width: 992px) {
        grid-template-columns: 1.1fr 0.9fr;
        gap: 4rem;
      }
    }

    .sub-title {
      color: var(--accent-primary);
      font-family: var(--font-subheading);
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      display: block;
      margin-bottom: 0.5rem;
    }

    .bmi-title {
      font-family: var(--font-heading);
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      margin-bottom: 0.75rem;
    }

    .bmi-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-bottom: 2rem;
    }

    .gender-toggle {
      display: flex;
      gap: 0.75rem;

      .gender-btn {
        flex: 1;
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        color: var(--text-muted);
        font-family: var(--font-subheading);
        font-size: 0.8rem;
        font-weight: 800;
        padding: 0.75rem;
        border-radius: 2px;
        cursor: pointer;
        transition: all var(--transition-fast);

        &:hover, &.active {
          background: var(--accent-primary);
          color: var(--text-white);
          border-color: var(--accent-primary);
        }
      }
    }

    .form-group {
      margin-bottom: 1.5rem;

      .input-label {
        font-family: var(--font-subheading);
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.1em;
        color: var(--text-white);
        display: block;
        margin-bottom: 0.5rem;
      }

      .custom-input {
        width: 100%;
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        color: var(--text-white);
        font-family: var(--font-heading);
        font-size: 1.4rem;
        padding: 0.75rem 1rem;
        border-radius: 2px;
        outline: none;
        transition: border-color var(--transition-fast);

        &:focus {
          border-color: var(--accent-primary);
        }
      }
    }

    .form-row-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }

    /* Results box */
    .result-display-box {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 2px;
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .res-sub {
        font-family: var(--font-subheading);
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        color: var(--text-muted);
      }

      .res-value {
        font-family: var(--font-heading);
        font-size: 5rem;
        font-weight: 900;
        color: var(--text-white);
        line-height: 1;
        margin: 0.5rem 0;
      }

      .res-category {
        font-family: var(--font-subheading);
        font-size: 1.25rem;
        font-weight: 900;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 2rem;
      }
    }

    /* Meter */
    .meter-wrapper {
      position: relative;
      width: 100%;
      margin-bottom: 2.5rem;

      .meter-bar {
        display: flex;
        height: 10px;
        border-radius: 5px;
        overflow: hidden;

        .zone {
          height: 100%;
          &.underweight { width: 25%; background: #3b82f6; }
          &.normal { width: 35%; background: #22c55e; }
          &.overweight { width: 20%; background: #eab308; }
          &.obese { width: 20%; background: #ef4444; }
        }
      }

      .meter-pointer {
        position: absolute;
        top: -6px;
        width: 4px;
        height: 22px;
        background: var(--text-white);
        box-shadow: 0 0 10px var(--text-white);
        border-radius: 2px;
        transform: translateX(-50%);
        transition: left 0.4s ease;
      }
    }

    .journey-banner {
      font-family: var(--font-heading);
      font-size: 1.3rem;
      letter-spacing: 0.05em;
      color: var(--accent-primary);
      margin-bottom: 1.75rem;
    }

    .w-full {
      width: 100%;
    }
  `]
})
export class BmiCalculatorComponent {
  modalService = inject(ModalService);

  gender = signal<'male' | 'female'>('male');
  age = 26;
  heightCm = 178;
  weightKg = 75;

  bmi = computed(() => {
    if (!this.heightCm || !this.weightKg) return '0.0';
    const heightM = this.heightCm / 100;
    const val = this.weightKg / (heightM * heightM);
    return val.toFixed(1);
  });

  category = computed(() => {
    const val = parseFloat(this.bmi());
    if (val < 18.5) return 'UNDERWEIGHT';
    if (val < 25) return 'HEALTHY NORMAL WEIGHT';
    if (val < 30) return 'OVERWEIGHT';
    return 'OBESE / HIGH DENSITY';
  });

  categoryColor = computed(() => {
    const val = parseFloat(this.bmi());
    if (val < 18.5) return '#3b82f6';
    if (val < 25) return '#22c55e';
    if (val < 30) return '#eab308';
    return '#ef4444';
  });

  meterPercent = computed(() => {
    const val = parseFloat(this.bmi());
    // Map BMI range (15 to 35) to 0-100%
    const clamped = Math.max(15, Math.min(35, val));
    return ((clamped - 15) / (35 - 15)) * 100;
  });
}
