import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '../../components/blog/blog.component';
import { FreeTrialComponent } from '../../components/free-trial/free-trial.component';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [
    CommonModule,
    BlogComponent,
    FreeTrialComponent,
    FinalCtaComponent
  ],
  template: `
    <div class="page-header">
      <div class="container-custom">
        <span class="sub-title">// ATHLETIC KNOWLEDGE BASE</span>
        <h1 class="page-title">FITNESS INSIGHTS.</h1>
        <p class="page-lead">
          Biomechanical breakdowns, macronutrient periodization guides, and recovery protocols.
        </p>
      </div>
    </div>

    <app-blog></app-blog>
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
export class BlogPageComponent {}
