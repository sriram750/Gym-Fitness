import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEMBERSHIPS_DATA } from '../../data/memberships';
import { MembershipPlan } from '../../models/fitness.models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="membership" class="membership-section section-padding">
      <div class="container-custom">
        <div class="section-header text-center">
          <span class="sub-title">// MEMBERSHIP ACCESS</span>
          <h2 class="main-title">INVEST IN YOUR PERFORMANCE.</h2>
          <p class="section-sub-lead">No hidden fees. Transparent, high-value access tiers.</p>
        </div>

        <!-- BILLING PERIOD TOGGLE SWITCH -->
        <div class="billing-toggle-wrapper">
          <div class="toggle-container">
            <button 
              class="toggle-btn" 
              [class.active]="billingCycle() === 'monthly'"
              (click)="billingCycle.set('monthly')"
            >
              MONTHLY
            </button>
            <button 
              class="toggle-btn" 
              [class.active]="billingCycle() === 'quarterly'"
              (click)="billingCycle.set('quarterly')"
            >
              QUARTERLY (SAVE 15%)
            </button>
            <button 
              class="toggle-btn" 
              [class.active]="billingCycle() === 'yearly'"
              (click)="billingCycle.set('yearly')"
            >
              ANNUAL (SAVE 30%)
            </button>
          </div>
        </div>

        <!-- MEMBERSHIP CARDS -->
        <div class="membership-grid">
          @for (plan of plans; track plan.id) {
            <div class="plan-card" [class.popular]="plan.popular">
              @if (plan.badge) {
                <div class="plan-badge">
                  <span>{{ plan.badge }}</span>
                </div>
              }

              <div class="plan-header">
                <h3 class="plan-name">{{ plan.name }}</h3>
                <p class="plan-tagline">{{ plan.tagline }}</p>

                <div class="price-display">
                  <span class="currency">₹</span>
                  <span class="amount">{{ getPrice(plan) | number }}</span>
                  <span class="period">/ {{ billingCycle() === 'monthly' ? 'MO' : (billingCycle() === 'quarterly' ? 'QTR' : 'YR') }}</span>
                </div>
              </div>

              <div class="plan-body">
                <ul class="features-list">
                  @for (feat of plan.features; track feat) {
                    <li class="included">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{{ feat }}</span>
                    </li>
                  }
                  @for (notFeat of plan.notIncluded || []; track notFeat) {
                    <li class="not-included">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      <span>{{ notFeat }}</span>
                    </li>
                  }
                </ul>
              </div>

              <div class="plan-footer">
                <button 
                  (click)="modalService.openEnquiry(plan.name)" 
                  [class]="plan.popular ? 'btn-primary w-full' : 'btn-outline w-full'"
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .membership-section {
      background: var(--bg-surface);
    }

    .text-center {
      text-align: center;
    }

    .section-sub-lead {
      max-width: 500px;
      margin: 0.5rem auto 0;
      color: var(--text-muted);
    }

    /* Billing Toggle Switch */
    .billing-toggle-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 3.5rem;
    }

    .toggle-container {
      display: inline-flex;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      padding: 0.35rem;
      border-radius: 40px;

      .toggle-btn {
        background: transparent;
        border: none;
        color: var(--text-muted);
        font-family: var(--font-subheading);
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.1em;
        padding: 0.65rem 1.4rem;
        border-radius: 30px;
        cursor: pointer;
        transition: all var(--transition-fast);

        &:hover, &.active {
          color: var(--text-white);
          background: var(--accent-primary);
          box-shadow: 0 4px 15px var(--accent-glow);
        }
      }
    }

    .membership-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      align-items: stretch;

      @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .plan-card {
      position: relative;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 4px;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      transition: all var(--transition-fast);

      &.popular {
        border-color: var(--accent-primary);
        background: var(--bg-surface-elevated);
        box-shadow: 0 10px 40px rgba(255, 46, 76, 0.15);
        transform: translateY(-6px);
      }

      &:hover {
        transform: translateY(-8px);
        border-color: var(--border-accent);
      }
    }

    .plan-badge {
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--accent-primary);
      color: var(--text-white);
      font-family: var(--font-subheading);
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      padding: 0.3rem 1rem;
      border-radius: 20px;
      box-shadow: 0 4px 15px var(--accent-glow);
    }

    .plan-header {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--border-subtle);

      .plan-name {
        font-family: var(--font-heading);
        font-size: 2.2rem;
        margin-bottom: 0.3rem;
      }

      .plan-tagline {
        font-size: 0.85rem;
        color: var(--text-muted);
        min-height: 40px;
      }

      .price-display {
        display: flex;
        align-items: baseline;
        gap: 0.2rem;
        margin-top: 1.25rem;

        .currency {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--accent-primary);
        }

        .amount {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 900;
          color: var(--text-white);
          line-height: 1;
        }

        .period {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 700;
        }
      }
    }

    .plan-body {
      flex: 1;
      margin-bottom: 2rem;
    }

    .features-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.9rem;

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        font-size: 0.88rem;

        &.included {
          color: var(--text-white);
        }

        &.not-included {
          color: var(--text-dim);
          text-decoration: line-through;
        }
      }
    }

    .w-full {
      width: 100%;
    }
  `]
})
export class MembershipComponent {
  modalService = inject(ModalService);
  plans: MembershipPlan[] = MEMBERSHIPS_DATA;
  billingCycle = signal<'monthly' | 'quarterly' | 'yearly'>('monthly');

  getPrice(plan: MembershipPlan): number {
    switch (this.billingCycle()) {
      case 'quarterly': return plan.priceQuarterly;
      case 'yearly': return plan.priceYearly;
      default: return plan.priceMonthly;
    }
  }
}
