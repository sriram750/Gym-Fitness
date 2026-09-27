import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { LOCATIONS_DATA } from '../../data/locations';

@Component({
  selector: 'app-modal-container',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    @if (modalService.activeModal(); as modalType) {
      <div class="modal-backdrop" (click)="onBackdropClick($event)">
        <div class="modal-wrapper" [ngClass]="modalType">
          <button (click)="modalService.closeModal()" class="btn-close-modal" aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          <!-- 1. FREE TRIAL FORM MODAL -->
          @if (modalType === 'free-trial' || modalType === 'enquiry') {
            <div class="modal-content form-modal">
              @if (submitted()) {
                <div class="success-screen">
                  <div class="check-circle">✓</div>
                  <h3 class="success-title">THANK YOU.</h3>
                  <p class="success-msg">
                    Our fitness concierge team will contact you shortly to confirm your session pass.
                  </p>
                  <button (click)="resetAndClose()" class="btn-primary mt-4">
                    BACK TO IRONPULSE
                  </button>
                </div>
              } @else {
                <span class="sub-title">// COMPLIMENTARY SESSION PASS</span>
                <h3 class="modal-title">
                  {{ modalType === 'free-trial' ? 'BOOK YOUR FREE TRIAL' : 'MEMBERSHIP ENQUIRY' }}
                </h3>
                <p class="modal-sub">
                  Experience our 5-star facilities and coaching. No payment required.
                </p>

                <form (submit)="onSubmitForm($event)" class="modal-form">
                  <div class="form-group">
                    <label>FULL NAME *</label>
                    <input type="text" [(ngModel)]="formData.name" name="name" required placeholder="Enter your full name" class="modal-input">
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label>PHONE NUMBER *</label>
                      <input type="tel" [(ngModel)]="formData.phone" name="phone" required placeholder="+91 98765 43210" class="modal-input">
                    </div>

                    <div class="form-group">
                      <label>PREFERRED LOCATION</label>
                      <select [(ngModel)]="formData.location" name="location" class="modal-input">
                        @for (loc of locations; track loc.id) {
                          <option [value]="loc.name">{{ loc.name }}</option>
                        }
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label>FITNESS GOAL</label>
                      <select [(ngModel)]="formData.goal" name="goal" class="modal-input">
                        <option value="Strength & Muscle Gain">Strength & Muscle Gain</option>
                        <option value="Fat Loss & Recomposition">Fat Loss & Recomposition</option>
                        <option value="Athletic Conditioning & HIIT">Athletic Conditioning & HIIT</option>
                        <option value="Combat & Striking">Combat & Striking</option>
                        <option value="Mobility & Recovery">Mobility & Recovery</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label>PREFERRED TIME</label>
                      <select [(ngModel)]="formData.time" name="time" class="modal-input">
                        <option value="Morning (06:00 AM - 10:00 AM)">Morning (06:00 AM - 10:00 AM)</option>
                        <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                        <option value="Evening (05:00 PM - 09:30 PM)">Evening (05:00 PM - 09:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" class="btn-primary w-full mt-2">
                    REQUEST FREE PASS NOW
                  </button>
                </form>
              }
            </div>
          }

          <!-- 2. FULLSCREEN VIDEO MODAL -->
          @if (modalType === 'video') {
            <div class="modal-content video-modal">
              <video controls autoplay class="modal-video-player">
                <source [src]="modalService.modalData().videoUrl" type="video/mp4">
              </video>
            </div>
          }

          <!-- 3. LIGHTBOX IMAGE MODAL -->
          @if (modalType === 'lightbox') {
            <div class="modal-content lightbox-modal">
              <img [src]="modalService.modalData().imageUrl" class="lightbox-img" alt="Lightbox Preview">
              @if (modalService.modalData().imageCaption; as caption) {
                <p class="lightbox-caption">{{ caption }}</p>
              }
            </div>
          }

          <!-- 4. TRAINER DETAIL MODAL -->
          @if (modalType === 'trainer') {
            @if (modalService.modalData().trainerData; as t) {
              <div class="modal-content trainer-modal">
                <div class="trainer-modal-grid">
                  <img [src]="t.image" [alt]="t.name" class="t-modal-img">
                  <div class="t-modal-info">
                    <span class="sub-title">{{ t.role }}</span>
                    <h3 class="modal-title">{{ t.name }}</h3>
                    <p class="t-exp">{{ t.experience }}</p>
                    
                    <p class="t-bio">{{ t.bio }}</p>

                    <blockquote class="t-quote">
                      "{{ t.quote }}"
                    </blockquote>

                    <div class="certs-list">
                      <span class="cert-label">CERTIFICATIONS:</span>
                      <div class="cert-chips">
                        @for (c of t.certifications; track c) {
                          <span class="c-chip">{{ c }}</span>
                        }
                      </div>
                    </div>

                    <button (click)="modalService.openFreeTrial()" class="btn-primary mt-4">
                      BOOK SESSION WITH {{ t.name.split(' ')[0] }}
                    </button>
                  </div>
                </div>
              </div>
            }
          }

          <!-- 5. PROGRAM DETAIL MODAL -->
          @if (modalType === 'program') {
            @if (modalService.modalData().programData; as p) {
              <div class="modal-content program-modal">
                <span class="sub-title">// {{ p.category }} • {{ p.intensity }}</span>
                <h3 class="modal-title">{{ p.title }}</h3>
                <p class="modal-sub">{{ p.subtitle }}</p>
                <p class="p-long">{{ p.longDescription }}</p>

                <div class="p-benefits">
                  <h4>KEY PROGRAM BENEFITS</h4>
                  <ul>
                    @for (b of p.benefits; track b) {
                      <li>✓ {{ b }}</li>
                    }
                  </ul>
                </div>

                <div class="p-meta">
                  <span>⏱ {{ p.duration }}</span>
                  <span>🔥 {{ p.caloriesBurn }}</span>
                  <span>📅 {{ p.schedule }}</span>
                </div>

                <button (click)="modalService.openFreeTrial()" class="btn-primary w-full mt-4">
                  CLAIM TRIAL FOR THIS PROGRAM
                </button>
              </div>
            }
          }

          <!-- 6. ARTICLE READER MODAL -->
          @if (modalType === 'article') {
            @if (modalService.modalData().articleData; as a) {
              <div class="modal-content article-modal">
                <span class="sub-title">{{ a.category }} • {{ a.readTime }}</span>
                <h3 class="modal-title">{{ a.title }}</h3>
                <p class="article-meta">BY {{ a.author.name.toUpperCase() }} | {{ a.date }}</p>

                <img [src]="a.image" [alt]="a.title" class="article-hero-img">

                <div class="article-paragraphs">
                  @for (paragraph of a.content; track paragraph) {
                    <p>{{ paragraph }}</p>
                  }
                </div>
              </div>
            }
          }
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(10, 10, 12, 0.9);
      backdrop-filter: blur(16px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      overflow-y: auto;
      animation: fadeIn 0.3s ease;
    }

    .modal-wrapper {
      position: relative;
      background: var(--bg-card);
      border: 1px solid var(--border-accent);
      border-radius: 4px;
      width: 100%;
      max-width: 640px;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);

      &.video, &.lightbox, &.trainer {
        max-width: 900px;
      }
    }

    .btn-close-modal {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-subtle);
      color: var(--text-white);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: all var(--transition-fast);

      &:hover {
        background: var(--accent-primary);
        border-color: var(--accent-primary);
      }
    }

    .modal-content {
      padding: 2.5rem;

      @media (max-width: 576px) {
        padding: 1.75rem;
      }
    }

    .sub-title {
      font-family: var(--font-subheading);
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: var(--accent-primary);
      display: block;
      margin-bottom: 0.3rem;
    }

    .modal-title {
      font-family: var(--font-heading);
      font-size: 2.2rem;
      line-height: 1;
      margin-bottom: 0.4rem;
    }

    .modal-sub {
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-bottom: 1.75rem;
    }

    /* Form Styles */
    .modal-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      .form-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;

        @media (min-width: 576px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        label {
          font-family: var(--font-subheading);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--text-white);
        }

        .modal-input {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-white);
          padding: 0.75rem 1rem;
          border-radius: 2px;
          outline: none;
          font-family: var(--font-body);

          &:focus {
            border-color: var(--accent-primary);
          }
        }
      }
    }

    .success-screen {
      text-align: center;
      padding: 2rem 0;

      .check-circle {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: var(--accent-primary);
        color: var(--text-white);
        font-size: 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        box-shadow: 0 0 30px var(--accent-glow);
      }

      .success-title {
        font-family: var(--font-heading);
        font-size: 2.8rem;
        margin-bottom: 0.5rem;
      }

      .success-msg {
        color: var(--text-muted);
        font-size: 1rem;
        max-width: 400px;
        margin: 0 auto;
      }
    }

    /* Video Player */
    .modal-video-player {
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
      background: #000;
    }

    /* Lightbox */
    .lightbox-modal {
      text-align: center;
      .lightbox-img {
        max-width: 100%;
        max-height: 70vh;
        object-fit: contain;
        border-radius: 2px;
      }
      .lightbox-caption {
        margin-top: 1rem;
        font-family: var(--font-subheading);
        font-size: 0.9rem;
        color: var(--text-white);
      }
    }

    /* Trainer Modal Grid */
    .trainer-modal-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: 0.8fr 1.2fr;
      }

      .t-modal-img {
        width: 100%;
        height: 380px;
        object-fit: cover;
        border-radius: 2px;
      }

      .t-exp {
        color: var(--accent-primary);
        font-family: var(--font-subheading);
        font-weight: 800;
        font-size: 0.8rem;
        margin-bottom: 1rem;
      }

      .t-bio {
        color: var(--text-muted);
        font-size: 0.95rem;
        margin-bottom: 1rem;
      }

      .t-quote {
        font-style: italic;
        border-left: 2px solid var(--accent-primary);
        padding-left: 1rem;
        color: var(--text-white);
        margin-bottom: 1.5rem;
      }

      .certs-list {
        .cert-label {
          font-size: 0.7rem;
          color: var(--text-dim);
          font-weight: 800;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.4rem;
        }

        .cert-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;

          .c-chip {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border-subtle);
            font-size: 0.75rem;
            padding: 0.25rem 0.6rem;
            border-radius: 2px;
          }
        }
      }
    }

    /* Program modal */
    .p-long {
      color: var(--text-white);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .p-benefits {
      margin-bottom: 1.5rem;

      h4 {
        font-family: var(--font-subheading);
        font-size: 0.8rem;
        letter-spacing: 0.1em;
        color: var(--accent-primary);
        margin-bottom: 0.5rem;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        li {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
      }
    }

    .p-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      padding: 0.75rem 1rem;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-white);
    }

    /* Article Modal */
    .article-hero-img {
      width: 100%;
      height: 260px;
      object-fit: cover;
      margin: 1.25rem 0;
      border-radius: 2px;
    }

    .article-meta {
      font-size: 0.75rem;
      color: var(--accent-primary);
      font-family: var(--font-subheading);
      font-weight: 800;
      letter-spacing: 0.1em;
    }

    .article-paragraphs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .mt-2 { margin-top: 0.5rem; }
    .mt-4 { margin-top: 1.5rem; }
    .w-full { width: 100%; }
  `]
})
export class ModalContainerComponent {
  modalService = inject(ModalService);
  locations = LOCATIONS_DATA;
  submitted = signal(false);

  formData = {
    name: '',
    phone: '',
    location: LOCATIONS_DATA[0].name,
    goal: 'Strength & Muscle Gain',
    time: 'Morning (06:00 AM - 10:00 AM)'
  };

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.modalService.closeModal();
    }
  }

  onSubmitForm(e: Event) {
    e.preventDefault();
    if (this.formData.name && this.formData.phone) {
      this.submitted.set(true);
    }
  }

  resetAndClose() {
    this.submitted.set(false);
    this.formData = {
      name: '',
      phone: '',
      location: LOCATIONS_DATA[0].name,
      goal: 'Strength & Muscle Gain',
      time: 'Morning (06:00 AM - 10:00 AM)'
    };
    this.modalService.closeModal();
  }
}
