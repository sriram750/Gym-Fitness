import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface Facility {
  num: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="facilities-section section-padding">
      <div class="container-custom">
        <div class="section-header">
          <span class="sub-title">// WORLD-CLASS AMENITIES</span>
          <h2 class="main-title">FACILITY SPECS.</h2>
        </div>

        <div class="facilities-grid">
          @for (facility of facilities; track facility.num) {
            <div class="facility-card" (click)="modalService.openLightbox(facility.image, facility.name + ' - ' + facility.description)">
              <div class="fac-image-box">
                <img [src]="facility.image" [alt]="facility.name" class="fac-img" loading="lazy">
                <div class="fac-overlay"></div>
                <span class="fac-num">{{ facility.num }}</span>
              </div>
              <div class="fac-info">
                <span class="fac-cat">{{ facility.category }}</span>
                <h3 class="fac-name">{{ facility.name }}</h3>
                <p class="fac-desc">{{ facility.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .facilities-section {
      background: var(--bg-dark);
    }

    .facilities-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .facility-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 2px;
      overflow: hidden;
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover {
        transform: translateY(-6px);
        border-color: var(--border-accent);

        .fac-img {
          transform: scale(1.08);
        }

        .fac-num {
          color: var(--accent-primary);
        }
      }
    }

    .fac-image-box {
      position: relative;
      height: 220px;
      width: 100%;
      overflow: hidden;

      .fac-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .fac-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(18,18,23,0.95) 100%);
      }

      .fac-num {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-family: var(--font-heading);
        font-size: 2.2rem;
        font-weight: 900;
        color: var(--text-dim);
        transition: color var(--transition-fast);
      }
    }

    .fac-info {
      padding: 1.5rem;

      .fac-cat {
        font-family: var(--font-subheading);
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        color: var(--accent-primary);
        display: block;
        margin-bottom: 0.3rem;
      }

      .fac-name {
        font-family: var(--font-heading);
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
      }

      .fac-desc {
        font-size: 0.88rem;
        color: var(--text-muted);
        margin: 0;
      }
    }
  `]
})
export class FacilitiesComponent {
  modalService = inject(ModalService);

  facilities: Facility[] = [
    { num: '01', name: 'PREMIUM EQUIPMENT', category: 'POWER & STRENGTH', description: 'Rogue, Hammer Strength, and Eleiko competition barbells and combo racks.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' },
    { num: '02', name: 'FUNCTIONAL TURF ZONE', category: 'HYROX & ATHLETICS', description: '30-meter high-density synthetic sprint turf for sled pushes and carrying drills.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80' },
    { num: '03', name: 'HIGH-OUTPUT CARDIO DECK', category: 'ENDURANCE & EPOC', description: 'Woodway curved treadmills, Assault bikes, and Concept2 ergometers.', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80' },
    { num: '04', name: 'PERSONAL TRAINING SUITES', category: '1-ON-1 COACHING', description: 'Private biomechanical analysis suites with dedicated video motion feedback.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80' },
    { num: '05', name: 'INFRARED RECOVERY ZONE', category: 'SYSTEMIC RESTORATION', description: 'Full-spectrum infrared saunas and cold contrast plunge tubs.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80' },
    { num: '06', name: 'GROUP BEAST STUDIO', category: 'HIGH-ENERGY CIRCUITS', description: 'Acoustically tuned, heart-rate telemetry integrated circuit floor.', image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80' }
  ];
}
