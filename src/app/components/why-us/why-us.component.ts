import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WhyItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  highlights: string[];
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="why-section section-padding">
      <div class="container-custom">
        <div class="section-header">
          <span class="sub-title">// THE IRONPULSE ADVANTAGE</span>
          <h2 class="main-title">WHY TRAIN WITH US.</h2>
        </div>

        <div class="why-asymmetric-wrapper">
          <!-- LEFT ACCORDION LIST -->
          <div class="why-list">
            @for (item of whyItems; track item.id; let i = $index) {
              <div 
                class="why-item" 
                [class.active]="activeId() === item.id"
                (mouseenter)="setActive(item.id)"
                (click)="setActive(item.id)"
              >
                <div class="why-header">
                  <span class="item-num">{{ item.num }}</span>
                  <div class="item-title-group">
                    <h3 class="item-title">{{ item.title }}</h3>
                    <span class="item-subtitle">{{ item.subtitle }}</span>
                  </div>
                  <div class="item-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>

                <div class="why-content" [class.expanded]="activeId() === item.id">
                  <p class="why-desc">{{ item.description }}</p>
                  <ul class="why-bullets">
                    @for (bullet of item.highlights; track bullet) {
                      <li>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{{ bullet }}</span>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            }
          </div>

          <!-- RIGHT DYNAMIC PREVIEW IMAGE -->
          <div class="why-preview-col">
            <div class="preview-card">
              @for (item of whyItems; track item.id) {
                <div 
                  class="preview-bg" 
                  [class.visible]="activeId() === item.id"
                  [style.background-image]="'url(' + item.bgImage + ')'"
                ></div>
              }
              <div class="preview-overlay"></div>
              <div class="preview-badge">
                <span class="badge-text">IRONPULSE STANDARD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-section {
      background: var(--bg-dark);
      position: relative;
    }

    .why-asymmetric-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: center;

      @media (min-width: 992px) {
        grid-template-columns: 1.2fr 0.8fr;
        gap: 4rem;
      }
    }

    .why-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .why-item {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      padding: 1.75rem 2rem;
      border-radius: 2px;
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover, &.active {
        border-color: var(--border-accent);
        background: var(--bg-surface-elevated);

        .item-num {
          color: var(--accent-primary);
          transform: scale(1.1);
        }

        .item-arrow {
          color: var(--accent-primary);
          transform: translateX(6px);
        }
      }
    }

    .why-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .item-num {
      font-family: var(--font-heading);
      font-size: 2.2rem;
      font-weight: 900;
      color: var(--text-dim);
      transition: all var(--transition-fast);
      min-width: 45px;
    }

    .item-title-group {
      flex: 1;

      .item-title {
        font-family: var(--font-heading);
        font-size: 1.8rem;
        margin-bottom: 0.1rem;
        letter-spacing: 0.04em;
      }

      .item-subtitle {
        font-size: 0.85rem;
        color: var(--text-muted);
        font-weight: 500;
      }
    }

    .item-arrow {
      color: var(--text-dim);
      transition: transform var(--transition-fast), color var(--transition-fast);
    }

    .why-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1), opacity 0.4s ease;
      opacity: 0;

      &.expanded {
        max-height: 300px;
        opacity: 1;
        margin-top: 1.25rem;
        padding-top: 1.25rem;
        border-top: 1px solid var(--border-subtle);
      }

      .why-desc {
        color: var(--text-muted);
        font-size: 0.95rem;
        margin-bottom: 1rem;
      }

      .why-bullets {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-white);
          font-weight: 600;
        }
      }
    }

    .why-preview-col {
      position: relative;
      height: 100%;
      min-height: 480px;

      .preview-card {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 480px;
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid var(--border-subtle);
      }

      .preview-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        opacity: 0;
        transition: opacity 0.6s ease, transform 0.8s ease;
        transform: scale(1.05);

        &.visible {
          opacity: 1;
          transform: scale(1);
        }
      }

      .preview-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(10,10,12,0.2) 0%, rgba(10,10,12,0.85) 100%);
      }

      .preview-badge {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        background: rgba(10, 10, 12, 0.9);
        border: 1px solid var(--border-accent);
        padding: 0.6rem 1.2rem;
        font-family: var(--font-subheading);
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        color: var(--accent-primary);
      }
    }
  `]
})
export class WhyUsComponent {
  activeId = signal('01');

  whyItems: WhyItem[] = [
    {
      id: '01',
      num: '01',
      title: 'COACHING EXCELLENCE',
      subtitle: 'CSCS Certified Master Trainers',
      description: 'We do not hire entry-level gym attendants. Every IronPulse coach holds accredited strength & biomechanics credentials with verified athlete transformation track records.',
      bgImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=85',
      highlights: [
        'Custom Periodized Barbell Programming',
        'Biomechanical Form & Structural Screenings',
        'Direct Access to Head Strength Coaches'
      ]
    },
    {
      id: '02',
      num: '02',
      title: 'PERFORMANCE ARENA',
      subtitle: 'Competition-Grade Eleiko & Rogue Machinery',
      description: 'Train with official powerlifting combo racks, calibrated steel plates, 30-meter indoor sled turf tracks, assault ergometers, and dedicated boxing rings.',
      bgImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=85',
      highlights: [
        'Official HYROX Training Rigging',
        'Infrared Saunas & Cold Contrast Plunges',
        'Zero Machine Wait-Time Floor Layouts'
      ]
    },
    {
      id: '03',
      num: '03',
      title: 'UNSTOPPABLE COMMUNITY',
      subtitle: 'Driven Lifters & Athletic Culture',
      description: 'Surround yourself with like-minded individuals who respect hard work. Zero ego, zero distractions—only raw drive and mutual accountability.',
      bgImage: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1000&q=85',
      highlights: [
        'Monthly Member Strength Challenges',
        'Community Beast & Endurance Camps',
        'Private IronPulse Athlete Network'
      ]
    },
    {
      id: '04',
      num: '04',
      title: 'VERIFIED RESULTS',
      subtitle: 'InBody 770 Scan Precision',
      description: 'Every 30 days we track visceral fat loss, segmental lean muscle gains, and intracellular hydration to ensure measurable continuous progress.',
      bgImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85',
      highlights: [
        'Clinical InBody Segmental Analytics',
        'Macro & Caloric Re-adjustments',
        'Guaranteed Physique Recomposition'
      ]
    }
  ];

  setActive(id: string) {
    this.activeId.set(id);
  }
}
