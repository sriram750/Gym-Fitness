import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from '../../components/membership/membership.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FreeTrialComponent } from '../../components/free-trial/free-trial.component';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-membership-page',
  standalone: true,
  imports: [
    CommonModule,
    MembershipComponent,
    FaqComponent,
    FreeTrialComponent,
    FinalCtaComponent
  ],
  template: `
    <div class="page-header">
      <div class="container-custom">
        <span class="sub-title">// TRANSPARENT TIERS</span>
        <h1 class="page-title">MEMBERSHIP ACCESS.</h1>
        <p class="page-lead">
          Choose between individual home-branch passes or full multi-location executive access.
        </p>
      </div>
    </div>

    <app-membership></app-membership>
    <app-faq></app-faq>
    <app-free-trial></app-free-trial>
    <app-final-cta></app-final-cta>
  `,
  styles: [`
    .page-header {
      padding: 10rem 0 5rem 0;
      background: linear-gradient(180deg, #121217 0%, #0a0a0c 100%);
      border-bottom: 1px solid var(--border-subtle);

      .sub-title {
        color: var(--accent-primary);
        font-family: var(--font-subheading);
        font-weight: 800;
        font-size: 0.85rem;
        letter-spacing: 0.15em;
        display: block;
        margin-bottom: 0.5rem;
      }

      .page-title {
        font-size: clamp(3rem, 7vw, 5.5rem);
        margin-bottom: 1rem;
      }

      .page-lead {
        font-size: 1.15rem;
        color: var(--text-muted);
        max-width: 600px;
      }
    }
  `]
})
export class MembershipPageComponent {}
