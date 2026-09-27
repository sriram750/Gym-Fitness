import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LOCATIONS_DATA } from '../../data/locations';
import { ModalService } from '../../services/modal.service';
import { LocationsComponent } from '../../components/locations/locations.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LocationsComponent],
  template: `
    <div class="page-header">
      <div class="container-custom">
        <span class="sub-title">// ATHLETE CONCIERGE</span>
        <h1 class="page-title">CONTACT IRONPULSE.</h1>
        <p class="page-lead">
          Have questions about memberships, private coaching, or corporate packages? Send us a message.
        </p>
      </div>
    </div>

    <section class="section-padding contact-section">
      <div class="container-custom">
        <div class="contact-grid">
          <div class="contact-form-card">
            @if (submitted()) {
              <div class="success-screen">
                <div class="check-circle">✓</div>
                <h3>MESSAGE SENT SUCCESSFULLY.</h3>
                <p>Our team will reach out to you within 2 business hours.</p>
              </div>
            } @else {
              <h2 class="form-title">SEND US A MESSAGE</h2>

              <form (submit)="onSubmit($event)" class="c-form">
                <div class="form-group">
                  <label>YOUR NAME *</label>
                  <input type="text" [(ngModel)]="formData.name" name="name" required placeholder="Full Name" class="custom-input">
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label>EMAIL ADDRESS *</label>
                    <input type="email" [(ngModel)]="formData.email" name="email" required placeholder="name@domain.com" class="custom-input">
                  </div>

                  <div class="form-group">
                    <label>PHONE NUMBER *</label>
                    <input type="tel" [(ngModel)]="formData.phone" name="phone" required placeholder="+91 98765 43210" class="custom-input">
                  </div>
                </div>

                <div class="form-group">
                  <label>TARGET LOCATION</label>
                  <select [(ngModel)]="formData.location" name="location" class="custom-input">
                    @for (loc of locations; track loc.id) {
                      <option [value]="loc.name">{{ loc.name }}</option>
                    }
                  </select>
                </div>

                <div class="form-group">
                  <label>YOUR MESSAGE *</label>
                  <textarea [(ngModel)]="formData.message" name="message" rows="5" required placeholder="How can our coaches assist your fitness goals?" class="custom-input"></textarea>
                </div>

                <button type="submit" class="btn-primary w-full">
                  SEND INQUIRY NOW
                </button>
              </form>
            }
          </div>

          <div class="contact-info-card">
            <h3 class="info-title">FLAGSHIP HEADQUARTERS</h3>
            
            <div class="info-item">
              <span class="i-label">ADDRESS</span>
              <p>42 Usman Road, Panagal Park, T Nagar, Chennai - 600017</p>
            </div>

            <div class="info-item">
              <span class="i-label">OPERATING HOURS</span>
              <p>Monday - Saturday: 05:00 AM - 11:00 PM</p>
              <p>Sunday: 06:00 AM - 10:00 PM</p>
            </div>

            <div class="info-item">
              <span class="i-label">DIRECT PHONE</span>
              <a href="tel:+914428159001" class="link">+91 44 2815 9001</a>
            </div>

            <div class="info-item">
              <span class="i-label">EMAIL SUPPORT</span>
              <a href="mailto:support@ironpulse.fitness" class="link">support&#64;ironpulse.fitness</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <app-locations></app-locations>
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

    .contact-section {
      background: var(--bg-surface);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;

      @media (min-width: 992px) {
        grid-template-columns: 1.2fr 0.8fr;
      }
    }

    .contact-form-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      padding: 3rem;
      border-radius: 4px;

      .form-title {
        font-family: var(--font-heading);
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }

    .c-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .form-row-2 {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;

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
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--text-white);
        }

        .custom-input {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-white);
          padding: 0.85rem 1rem;
          border-radius: 2px;
          outline: none;
          font-family: var(--font-body);

          &:focus {
            border-color: var(--accent-primary);
          }
        }
      }
    }

    .contact-info-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      padding: 3rem;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .info-title {
        font-family: var(--font-heading);
        font-size: 2rem;
        border-bottom: 1px solid var(--border-subtle);
        padding-bottom: 1rem;
      }

      .info-item {
        display: flex;
        flex-direction: column;

        .i-label {
          font-size: 0.7rem;
          color: var(--text-dim);
          font-weight: 800;
          letter-spacing: 0.12em;
          margin-bottom: 0.2rem;
        }

        p {
          color: var(--text-white);
          margin: 0;
          font-size: 0.95rem;
        }

        .link {
          color: var(--accent-primary);
          text-decoration: none;
          font-weight: 700;
          font-size: 1.05rem;
        }
      }
    }

    .success-screen {
      text-align: center;
      padding: 3rem 0;

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
      }

      h3 {
        font-family: var(--font-heading);
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: var(--text-muted);
      }
    }

    .w-full { width: 100%; }
  `]
})
export class ContactPageComponent {
  locations = LOCATIONS_DATA;
  submitted = signal(false);

  formData = {
    name: '',
    email: '',
    phone: '',
    location: LOCATIONS_DATA[0].name,
    message: ''
  };

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.formData.name && this.formData.phone) {
      this.submitted.set(true);
    }
  }
}
