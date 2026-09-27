import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container-custom">
        <div class="footer-top-grid">
          <!-- BRAND COL -->
          <div class="footer-brand-col">
            <a routerLink="/" class="footer-brand">
              <span class="brand-text">IRON<span class="accent">PULSE</span></span>
              <span class="brand-tag">FITNESS</span>
            </a>

            <p class="brand-desc">
              Chennai's high-performance training sanctuary built for serious athletes, lifters, and committed individuals.
            </p>

            <div class="social-icons">
              <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <!-- LINKS COL 1 -->
          <div class="footer-links-col">
            <h4 class="col-heading">NAVIGATION</h4>
            <ul class="links-list">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/programs">Training Programs</a></li>
              <li><a routerLink="/about">The Experience</a></li>
              <li><a routerLink="/trainers">Master Coaches</a></li>
              <li><a routerLink="/membership">Membership Tiers</a></li>
              <li><a routerLink="/locations">Chennai Locations</a></li>
            </ul>
          </div>

          <!-- LINKS COL 2 -->
          <div class="footer-links-col">
            <h4 class="col-heading">INSIGHTS & RESOURCES</h4>
            <ul class="links-list">
              <li><a routerLink="/blog">Fitness Articles</a></li>
              <li><a routerLink="/contact">Book Free Trial</a></li>
              <li><a routerLink="/about">BMI Calculator</a></li>
              <li><a routerLink="/membership">Corporate Access</a></li>
              <li><a routerLink="/contact">Franchise Enquiry</a></li>
            </ul>
          </div>

          <!-- CONTACT INFO COL -->
          <div class="footer-contact-col">
            <h4 class="col-heading">FLAGSHIP HEADQUARTERS</h4>
            <div class="contact-item">
              <span class="c-label">ADDRESS</span>
              <span class="c-val">42 Usman Road, Panagal Park, T Nagar, Chennai - 600017</span>
            </div>
            <div class="contact-item">
              <span class="c-label">HOTLINE</span>
              <a href="tel:+914428159001" class="c-val link">+91 44 2815 9001</a>
            </div>
            <div class="contact-item">
              <span class="c-label">EMAIL ENQUIRIES</span>
              <a href="mailto:join@ironpulse.fitness" class="c-val link">join&#64;ironpulse.fitness</a>
            </div>
          </div>
        </div>

        <!-- FOOTER BOTTOM -->
        <div class="footer-bottom">
          <p class="copyright-text">© 2026 IronPulse Fitness. All rights reserved.</p>

          <div class="legal-links">
            <a href="#">Privacy Policy</a>
            <span class="dot">•</span>
            <a href="#">Terms & Conditions</a>
            <span class="dot">•</span>
            <a href="#">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #060608;
      border-top: 1px solid var(--border-subtle);
      padding: 5rem 0 2rem 0;
    }

    .footer-top-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      margin-bottom: 4rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr;
      }
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      line-height: 1;
      margin-bottom: 1.25rem;

      .brand-text {
        font-family: var(--font-heading);
        font-size: 2.2rem;
        font-weight: 900;
        color: var(--text-white);

        .accent { color: var(--accent-primary); }
      }

      .brand-tag {
        font-family: var(--font-subheading);
        font-size: 0.6rem;
        letter-spacing: 0.35em;
        color: var(--text-muted);
      }
    }

    .brand-desc {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      max-width: 320px;
    }

    .social-icons {
      display: flex;
      gap: 1rem;

      a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        color: var(--text-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all var(--transition-fast);

        &:hover {
          color: var(--text-white);
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }
      }
    }

    .col-heading {
      font-family: var(--font-subheading);
      font-size: 0.85rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: var(--text-white);
      margin-bottom: 1.5rem;
    }

    .links-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      a {
        color: var(--text-muted);
        text-decoration: none;
        font-size: 0.9rem;
        transition: color var(--transition-fast);

        &:hover {
          color: var(--accent-primary);
        }
      }
    }

    .contact-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      .c-label {
        font-size: 0.65rem;
        color: var(--text-dim);
        font-weight: 700;
        letter-spacing: 0.1em;
      }

      .c-val {
        font-size: 0.88rem;
        color: var(--text-muted);

        &.link {
          color: var(--accent-primary);
          text-decoration: none;
          font-weight: 600;
        }
      }
    }

    .footer-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-subtle);

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .copyright-text {
        font-size: 0.85rem;
        color: var(--text-dim);
      }

      .legal-links {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        a {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 0.8rem;
          transition: color var(--transition-fast);

          &:hover {
            color: var(--text-white);
          }
        }

        .dot {
          color: var(--text-dim);
          font-size: 0.8rem;
        }
      }
    }
  `]
})
export class FooterComponent {}
