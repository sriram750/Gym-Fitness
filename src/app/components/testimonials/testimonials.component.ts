import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Testimonial } from '../../models/fitness.models';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section section-padding">
      <div class="container-custom">
        <div class="section-header text-center">
          <span class="sub-title">// ATHLETE TESTIMONIALS</span>
          <h2 class="main-title">VOICES FROM THE IRON FLOOR.</h2>
        </div>

        @if (activeItem(); as item) {
          <div class="testimonial-card">
            <div class="quote-mark">“</div>
            
            <blockquote class="large-quote">
              {{ item.quote }}
            </blockquote>

            <div class="member-profile">
              <img [src]="item.avatar" [alt]="item.name" class="member-avatar">
              <div class="member-info">
                <h3 class="member-name">{{ item.name }}</h3>
                <span class="member-role">{{ item.role }} • {{ item.location }}</span>
                <span class="achievement-pill">🏆 {{ item.achievement }}</span>
              </div>
            </div>

            <!-- CAROUSEL DOTS -->
            <div class="dots-wrapper">
              @for (t of testimonials; track t.id; let i = $index) {
                <button 
                  class="dot-btn" 
                  [class.active]="activeIdx() === i"
                  (click)="selectIndex(i)"
                  [attr.aria-label]="'Go to testimonial ' + (i + 1)"
                ></button>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      background: var(--bg-dark);
      position: relative;
    }

    .text-center {
      text-align: center;
    }

    .testimonial-card {
      position: relative;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 4px;
      padding: 4rem 3.5rem;
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);

      @media (max-width: 768px) {
        padding: 3rem 1.5rem;
      }
    }

    .quote-mark {
      font-family: var(--font-heading);
      font-size: 6rem;
      color: var(--accent-primary);
      line-height: 0.5;
      margin-bottom: 1.5rem;
      opacity: 0.8;
    }

    .large-quote {
      font-family: var(--font-heading);
      font-size: clamp(1.8rem, 3.8vw, 2.8rem);
      line-height: 1.15;
      color: var(--text-white);
      margin-bottom: 2.5rem;
      letter-spacing: 0.03em;
    }

    .member-profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2.5rem;

      @media (min-width: 576px) {
        flex-direction: row;
        text-align: left;
      }

      .member-avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--accent-primary);
      }

      .member-info {
        display: flex;
        flex-direction: column;

        .member-name {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          line-height: 1;
        }

        .member-role {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .achievement-pill {
          font-family: var(--font-subheading);
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--accent-primary);
          margin-top: 0.4rem;
        }
      }
    }

    .dots-wrapper {
      display: flex;
      gap: 0.75rem;

      .dot-btn {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
        border: none;
        cursor: pointer;
        transition: all var(--transition-fast);

        &:hover, &.active {
          background: var(--accent-primary);
          transform: scale(1.3);
          box-shadow: 0 0 10px var(--accent-primary);
        }
      }
    }
  `]
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = TESTIMONIALS_DATA;
  activeIdx = signal(0);

  activeItem = signal<Testimonial>(TESTIMONIALS_DATA[0]);

  selectIndex(idx: number) {
    this.activeIdx.set(idx);
    this.activeItem.set(this.testimonials[idx]);
  }
}
