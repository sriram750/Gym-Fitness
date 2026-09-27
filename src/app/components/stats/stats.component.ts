import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section #statsSection class="stats-section">
      <div class="container-custom">
        <div class="stats-grid">
          @for (stat of stats; track stat.label; let i = $index) {
            <div class="stat-card">
              <div class="number-wrapper">
                <span #counterEl class="stat-number">0{{ stat.suffix }}</span>
              </div>
              <div class="stat-info">
                <h3 class="stat-label">{{ stat.label }}</h3>
                <p class="stat-desc">{{ stat.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stats-section {
      background: var(--bg-surface);
      padding: 4.5rem 0;
      border-y: 1px solid var(--border-subtle);
      position: relative;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem 2rem;

      @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }
    }

    .stat-card {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-subtle);
      border-radius: 2px;
      transition: transform var(--transition-fast), border-color var(--transition-fast);

      &:hover {
        transform: translateY(-4px);
        border-color: var(--border-accent);
      }
    }

    .stat-number {
      font-family: var(--font-heading);
      font-size: clamp(3.2rem, 6vw, 4.8rem);
      font-weight: 900;
      color: var(--accent-primary);
      line-height: 1;
      display: block;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 20px rgba(255, 46, 76, 0.2);
    }

    .stat-label {
      font-family: var(--font-subheading);
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      color: var(--text-white);
      margin-bottom: 0.35rem;
    }

    .stat-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin: 0;
    }
  `]
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef;
  @ViewChild('counterEl') counterEls!: any;

  animationService = inject(AnimationService);
  private observer: IntersectionObserver | null = null;
  private animated = false;

  stats: StatItem[] = [
    { value: 12, suffix: '+', label: 'YEARS EXPERIENCE', description: 'Pioneering athletic strength standards since 2014.' },
    { value: 25, suffix: 'K+', label: 'ACTIVE MEMBERS', description: 'Transformed physiques across our fitness network.' },
    { value: 18, suffix: '+', label: 'EXPERT COACHES', description: 'CSCS & USAW certified master strength specialists.' },
    { value: 5, suffix: '', label: 'CHENNAI LOCATIONS', description: 'T Nagar, Anna Nagar, Velachery, OMR, Porur.' }
  ];

  ngAfterViewInit() {
    if (typeof IntersectionObserver !== 'undefined' && this.statsSection?.nativeElement) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.runCounters();
          }
        });
      }, { threshold: 0.3 });
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  private runCounters() {
    const els = this.statsSection.nativeElement.querySelectorAll('.stat-number');
    els.forEach((el: HTMLElement, index: number) => {
      const item = this.stats[index];
      if (item) {
        this.animationService.animateCounter(el, item.value, 1800, '', item.suffix);
      }
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
