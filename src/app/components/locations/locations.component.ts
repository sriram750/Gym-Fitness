import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LOCATIONS_DATA } from '../../data/locations';
import { GymLocation } from '../../models/fitness.models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="locations" class="locations-section section-padding">
      <div class="container-custom">
        <div class="section-header-flex">
          <div class="section-header">
            <span class="sub-title">// MULTI-BRANCH NETWORK</span>
            <h2 class="main-title">FIND YOUR IRONPULSE.</h2>
          </div>

          <!-- SEARCH INPUT -->
          <div class="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input 
              type="text" 
              [ngModel]="searchQuery()" 
              (ngModelChange)="searchQuery.set($event)"
              placeholder="Search by area or branch (e.g. OMR, T Nagar)..."
              class="search-input"
            >
          </div>
        </div>

        <!-- LOCATIONS LIST -->
        <div class="locations-grid">
          @for (loc of filteredLocations(); track loc.id) {
            <div class="location-card">
              <div class="loc-image-wrapper">
                <img [src]="loc.image" [alt]="loc.name" class="loc-img" loading="lazy">
                <div class="loc-overlay"></div>
                <span class="area-tag">{{ loc.area }}</span>
              </div>

              <div class="loc-content">
                <h3 class="loc-name">{{ loc.name }}</h3>
                <p class="loc-address">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>{{ loc.address }}</span>
                </p>

                <div class="loc-meta-grid">
                  <div class="meta-item">
                    <span class="meta-label">WEEKDAY HOURS</span>
                    <span class="meta-val">{{ loc.hours.weekdays }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">PHONE</span>
                    <a [href]="'tel:' + loc.phone" class="meta-val link">{{ loc.phone }}</a>
                  </div>
                </div>

                <div class="facilities-tags">
                  @for (fac of loc.facilities; track fac) {
                    <span class="fac-pill">• {{ fac }}</span>
                  }
                </div>

                <div class="loc-card-footer">
                  <a [href]="loc.mapLink" target="_blank" class="btn-outline btn-sm">
                    GET DIRECTIONS
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <button (click)="modalService.openFreeTrial(loc.name)" class="btn-primary btn-sm">
                    BOOK TRIAL HERE
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .locations-section {
      background: var(--bg-dark);
    }

    .section-header-flex {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 3.5rem;

      @media (min-width: 992px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
      }
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      padding: 0.85rem 1.25rem;
      border-radius: 40px;
      min-width: 320px;
      color: var(--text-muted);

      .search-input {
        background: transparent;
        border: none;
        outline: none;
        color: var(--text-white);
        font-family: var(--font-body);
        font-size: 0.9rem;
        width: 100%;

        &::placeholder {
          color: var(--text-dim);
        }
      }
    }

    .locations-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;

      @media (min-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .location-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 2px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all var(--transition-fast);

      &:hover {
        border-color: var(--border-accent);
        transform: translateY(-4px);

        .loc-img {
          transform: scale(1.05);
        }
      }
    }

    .loc-image-wrapper {
      position: relative;
      height: 240px;
      width: 100%;
      overflow: hidden;

      .loc-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .loc-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 40%, rgba(18,18,23,0.95) 100%);
      }

      .area-tag {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: var(--accent-primary);
        color: var(--text-white);
        font-family: var(--font-subheading);
        font-size: 0.75rem;
        font-weight: 900;
        letter-spacing: 0.15em;
        padding: 0.35rem 0.85rem;
        border-radius: 2px;
      }
    }

    .loc-content {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      flex: 1;

      .loc-name {
        font-family: var(--font-heading);
        font-size: 2rem;
        margin-bottom: 0.6rem;
      }

      .loc-address {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.9rem;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
      }

      .loc-meta-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-bottom: 1.5rem;
        background: var(--bg-card);
        padding: 1rem;
        border-radius: 2px;
        border: 1px solid var(--border-subtle);

        .meta-item {
          display: flex;
          flex-direction: column;

          .meta-label {
            font-size: 0.65rem;
            color: var(--text-dim);
            font-weight: 700;
            letter-spacing: 0.1em;
          }

          .meta-val {
            font-size: 0.85rem;
            color: var(--text-white);
            font-weight: 600;

            &.link {
              color: var(--accent-primary);
              text-decoration: none;
            }
          }
        }
      }

      .facilities-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;

        .fac-pill {
          font-size: 0.75rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
        }
      }

      .loc-card-footer {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: auto;
        padding-top: 1.25rem;
        border-top: 1px solid var(--border-subtle);

        .btn-sm {
          padding: 0.7rem 1.2rem;
          font-size: 0.8rem;
          flex: 1;
        }
      }
    }
  `]
})
export class LocationsComponent {
  modalService = inject(ModalService);
  locations: GymLocation[] = LOCATIONS_DATA;
  searchQuery = signal('');

  filteredLocations = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.locations;
    return this.locations.filter(l => 
      l.name.toLowerCase().includes(q) || 
      l.area.toLowerCase().includes(q) || 
      l.address.toLowerCase().includes(q)
    );
  });
}
