import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface GalleryItem {
  id: string;
  title: string;
  category: 'TRAINING' | 'EQUIPMENT' | 'COACHES' | 'RECOVERY';
  image: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery-section section-padding">
      <div class="container-custom">
        <div class="section-header-flex">
          <div class="section-header">
            <span class="sub-title">// ATHLETIC SNAPSHOTS</span>
            <h2 class="main-title">INSIDE IRONPULSE.</h2>
          </div>

          <!-- CATEGORY FILTER TABS -->
          <div class="gallery-filters">
            @for (cat of categories; track cat) {
              <button 
                class="filter-btn" 
                [class.active]="activeCategory() === cat"
                (click)="activeCategory.set(cat)"
              >
                {{ cat }}
              </button>
            }
          </div>
        </div>

        <!-- MASONRY GALLERY GRID -->
        <div class="masonry-grid">
          @for (item of filteredItems(); track item.id) {
            <div class="gallery-card" (click)="modalService.openLightbox(item.image, item.title + ' (' + item.category + ')')">
              <img [src]="item.image" [alt]="item.title" class="gallery-img" loading="lazy">
              <div class="gallery-overlay">
                <span class="img-cat">{{ item.category }}</span>
                <h3 class="img-title">{{ item.title }}</h3>
                <div class="zoom-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-section {
      background: var(--bg-surface);
    }

    .section-header-flex {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 3rem;

      @media (min-width: 992px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
      }
    }

    .gallery-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .filter-btn {
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        color: var(--text-muted);
        font-family: var(--font-subheading);
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        padding: 0.6rem 1.2rem;
        border-radius: 2px;
        cursor: pointer;
        transition: all var(--transition-fast);

        &:hover, &.active {
          background: var(--accent-primary);
          color: var(--text-white);
          border-color: var(--accent-primary);
        }
      }
    }

    .masonry-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;

      @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .gallery-card {
      position: relative;
      height: 280px;
      border-radius: 2px;
      overflow: hidden;
      cursor: pointer;
      border: 1px solid var(--border-subtle);

      &:hover {
        .gallery-img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          opacity: 1;
        }
      }
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .gallery-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(10,10,12,0.2) 0%, rgba(10,10,12,0.9) 100%);
      opacity: 0;
      transition: opacity var(--transition-fast);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .img-cat {
        font-family: var(--font-subheading);
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        color: var(--accent-primary);
      }

      .img-title {
        font-family: var(--font-heading);
        font-size: 1.6rem;
        color: var(--text-white);
        margin-top: 0.2rem;
      }

      .zoom-icon {
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        color: var(--text-white);
      }
    }
  `]
})
export class GalleryComponent {
  modalService = inject(ModalService);

  categories = ['ALL', 'TRAINING', 'EQUIPMENT', 'COACHES', 'RECOVERY'];
  activeCategory = signal('ALL');

  items: GalleryItem[] = [
    { id: '1', title: 'COMPETITION DEADLIFT PLATFORM', category: 'EQUIPMENT', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' },
    { id: '2', title: 'ATHLETIC SLED SPRINT TURF', category: 'TRAINING', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80' },
    { id: '3', title: 'INFRARED SAUNA SANCTUARY', category: 'RECOVERY', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80' },
    { id: '4', title: 'HEAVY BAG COMBAT OCTAGON', category: 'TRAINING', image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=800&q=80' },
    { id: '5', title: 'MASTER COACH INSTRUCTION', category: 'COACHES', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80' },
    { id: '6', title: 'PANORAMIC CARDIO DECK', category: 'EQUIPMENT', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80' }
  ];

  filteredItems = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'ALL') return this.items;
    return this.items.filter(i => i.category === cat);
  });
}
