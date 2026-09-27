import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from '../../components/intro/intro.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { FacilitiesComponent } from '../../components/facilities/facilities.component';
import { BmiCalculatorComponent } from '../../components/bmi-calculator/bmi-calculator.component';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    IntroComponent,
    WhyUsComponent,
    ExperienceComponent,
    FacilitiesComponent,
    BmiCalculatorComponent,
    FinalCtaComponent
  ],
  template: `
    <div class="page-header">
      <div class="container-custom">
        <span class="sub-title">// THE IRONPULSE LEGACY</span>
        <h1 class="page-title">BUILT FOR THE COMMITTED.</h1>
        <p class="page-lead">
          Founded on unyielding athletic standards, biomechanical science, and competition-grade infrastructure.
        </p>
      </div>
    </div>

    <app-intro></app-intro>
    <app-why-us></app-why-us>
    <app-experience></app-experience>
    <app-facilities></app-facilities>
    <app-bmi-calculator></app-bmi-calculator>
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
export class AboutPageComponent {}
