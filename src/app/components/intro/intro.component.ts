import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="intro" class="section-padding intro-section">
      <div class="container-custom">
        <div class="intro-grid">
          <!-- LEFT EDITORIAL TEXT CONTENT -->
          <div class="intro-text-col">
            <span class="sub-title">// THE IRONPULSE MANIFESTO</span>
            <h2 class="editorial-heading">
              WE DON'T JUST<br>
              <span class="text-stroke">BUILD BODIES.</span><br>
              <span class="accent-color">WE BUILD DISCIPLINE.</span>
            </h2>

            <div class="intro-body">
              <p class="highlight-lead">
                IronPulse was forged for individuals who refuse average standards. We reject generic fitness gimmicks and empty promises.
              </p>
              <p>
                Our 5 flagship sanctuaries across Chennai bring together competition-grade barbell rigging, sports biomechanics, dynamic sprint tracks, and infrared recovery suites under one relentless roof. Whether your goal is absolute strength, athletic speed, or total physical recomposition, we provide the environment and expertise to make failure obsolete.
              </p>
            </div>

            <div class="signature-block">
              <div class="sig-details">
                <span class="sig-name">VIKRAM VANCE</span>
                <span class="sig-role">FOUNDER & HEAD OF PERFORMANCE</span>
              </div>
              <button (click)="modalService.openFreeTrial()" class="btn-outline">
                JOIN THE MOVEMENT
              </button>
            </div>
          </div>

          <!-- RIGHT CINEMATIC IMAGE / VIDEO MEDIA -->
          <div class="intro-media-col">
            <div class="media-frame">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85" 
                alt="IronPulse Training Facility" 
                class="intro-img"
              >
              <div class="media-accent-box">
                <span class="box-number">100%</span>
                <span class="box-label">SCIENCE & RESILIENCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .intro-section {
      background: var(--bg-dark);
      position: relative;
      overflow: hidden;
    }

    .intro-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3.5rem;
      align-items: center;

      @media (min-width: 992px) {
        grid-template-columns: 1.15fr 0.85fr;
        gap: 5rem;
      }
    }

    .sub-title {
      color: var(--accent-primary);
      font-family: var(--font-subheading);
      font-weight: 800;
      font-size: 0.85rem;
      letter-spacing: 0.2em;
      display: block;
      margin-bottom: 1rem;
    }

    .editorial-heading {
      font-size: clamp(2.8rem, 5.5vw, 4.8rem);
      font-weight: 900;
      line-height: 0.92;
      margin-bottom: 2rem;

      .text-stroke {
        color: transparent;
        -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.85);
      }

      .accent-color {
        color: var(--accent-primary);
      }
    }

    .intro-body {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin-bottom: 2.5rem;

      .highlight-lead {
        font-size: 1.15rem;
        color: var(--text-white);
        font-weight: 500;
        line-height: 1.5;
        border-left: 3px solid var(--accent-primary);
        padding-left: 1.25rem;
      }
    }

    .signature-block {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-subtle);

      .sig-name {
        font-family: var(--font-heading);
        font-size: 1.4rem;
        display: block;
        letter-spacing: 0.05em;
      }

      .sig-role {
        font-size: 0.75rem;
        color: var(--text-muted);
        letter-spacing: 0.1em;
        font-weight: 700;
      }
    }

    .intro-media-col {
      position: relative;

      .media-frame {
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid var(--border-subtle);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);

        &::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(10, 10, 12, 0.8) 100%);
        }

        .intro-img {
          width: 100%;
          height: 100%;
          min-height: 480px;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;

          &:hover {
            transform: scale(1.03);
          }
        }
      }

      .media-accent-box {
        position: absolute;
        bottom: 2rem;
        left: -1.5rem;
        background: var(--bg-surface-elevated);
        border: 1px solid var(--border-accent);
        padding: 1.25rem 1.75rem;
        display: flex;
        flex-direction: column;
        z-index: 2;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);

        @media (max-width: 576px) {
          left: 1rem;
          bottom: 1rem;
        }

        .box-number {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          color: var(--accent-primary);
          line-height: 1;
        }

        .box-label {
          font-family: var(--font-subheading);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--text-white);
          margin-top: 0.2rem;
        }
      }
    }
  `]
})
export class IntroComponent {
  modalService = inject(ModalService);
}
