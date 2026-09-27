import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="navbar-header" [class.scrolled]="isScrolled()">
      <div class="container-custom navbar-container">
        <!-- BRAND LOGO -->
        <a routerLink="/" class="navbar-brand">
          <span class="brand-text">IRON<span class="accent">PULSE</span></span>
          <span class="brand-tag">FITNESS</span>
        </a>

        <!-- DESKTOP NAV LINKS -->
        <nav class="desktop-nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">HOME</a>
          <a routerLink="/programs" routerLinkActive="active" class="nav-link">PROGRAMS</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link">EXPERIENCE</a>
          <a routerLink="/trainers" routerLinkActive="active" class="nav-link">TRAINERS</a>
          <a routerLink="/membership" routerLinkActive="active" class="nav-link">MEMBERSHIP</a>
          <a routerLink="/locations" routerLinkActive="active" class="nav-link">LOCATIONS</a>
          <a routerLink="/blog" routerLinkActive="active" class="nav-link">INSIGHTS</a>
        </nav>

        <!-- CTA BUTTON -->
        <div class="nav-actions">
          <button (click)="modalService.openFreeTrial()" class="btn-primary btn-nav">
            START TRAINING
          </button>
          
          <!-- MOBILE HAMBURGER BUTTON -->
          <button (click)="toggleMobileMenu()" class="mobile-toggle" aria-label="Toggle navigation menu">
            <span class="bar" [class.open]="mobileMenuOpen()"></span>
            <span class="bar" [class.open]="mobileMenuOpen()"></span>
            <span class="bar" [class.open]="mobileMenuOpen()"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- FULLSCREEN MOBILE MENU -->
    <div class="mobile-menu-overlay" [class.active]="mobileMenuOpen()">
      <div class="mobile-menu-content">
        <div class="mobile-brand">
          <span class="brand-text">IRON<span class="accent">PULSE</span></span>
        </div>
        <nav class="mobile-nav-links">
          <a routerLink="/" (click)="closeMobileMenu()" class="mobile-link">HOME</a>
          <a routerLink="/programs" (click)="closeMobileMenu()" class="mobile-link">PROGRAMS</a>
          <a routerLink="/about" (click)="closeMobileMenu()" class="mobile-link">EXPERIENCE</a>
          <a routerLink="/trainers" (click)="closeMobileMenu()" class="mobile-link">TRAINERS</a>
          <a routerLink="/membership" (click)="closeMobileMenu()" class="mobile-link">MEMBERSHIP</a>
          <a routerLink="/locations" (click)="closeMobileMenu()" class="mobile-link">LOCATIONS</a>
          <a routerLink="/blog" (click)="closeMobileMenu()" class="mobile-link">INSIGHTS</a>
          <a routerLink="/contact" (click)="closeMobileMenu()" class="mobile-link">CONTACT</a>
        </nav>
        <div class="mobile-cta-wrapper">
          <button (click)="closeMobileMenu(); modalService.openFreeTrial()" class="btn-primary w-full">
            START TRAINING NOW
          </button>
          <div class="mobile-contact-info">
            <p>CHENNAI FLAGSHIP STORES</p>
            <a href="tel:+914428159001">+91 44 2815 9001</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .navbar-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 1.5rem 0;
      transition: all var(--transition-medium);
      background: rgba(10, 10, 12, 0.2);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.03);

      &.scrolled {
        padding: 0.9rem 0;
        background: rgba(10, 10, 12, 0.92);
        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--border-subtle);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }
    }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .navbar-brand {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      line-height: 1;

      .brand-text {
        font-family: var(--font-heading);
        font-size: 1.85rem;
        font-weight: 900;
        letter-spacing: 0.05em;
        color: var(--text-white);

        .accent {
          color: var(--accent-primary);
        }
      }

      .brand-tag {
        font-family: var(--font-subheading);
        font-size: 0.55rem;
        letter-spacing: 0.35em;
        color: var(--text-muted);
        margin-top: -2px;
      }
    }

    .desktop-nav {
      display: none;
      align-items: center;
      gap: 2rem;

      @media (min-width: 992px) {
        display: flex;
      }

      .nav-link {
        color: var(--text-muted);
        text-decoration: none;
        font-family: var(--font-subheading);
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        transition: color var(--transition-fast);
        position: relative;
        padding: 0.5rem 0;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          transition: width var(--transition-fast);
        }

        &:hover, &.active {
          color: var(--text-white);

          &::after {
            width: 100%;
          }
        }
      }
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      .btn-nav {
        padding: 0.75rem 1.4rem;
        font-size: 0.85rem;
        display: none;

        @media (min-width: 576px) {
          display: inline-flex;
        }
      }
    }

    /* Hamburger */
    .mobile-toggle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 28px;
      height: 20px;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 1002;

      @media (min-width: 992px) {
        display: none;
      }

      .bar {
        width: 100%;
        height: 2px;
        background: var(--text-white);
        transition: all 0.3s ease;

        &.open:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        &.open:nth-child(2) {
          opacity: 0;
        }
        &.open:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
      }
    }

    /* Mobile Fullscreen Menu */
    .mobile-menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(10, 10, 12, 0.98);
      backdrop-filter: blur(20px);
      z-index: 1001;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      &.active {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .mobile-menu-content {
      width: 100%;
      max-width: 400px;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2.5rem;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      .mobile-link {
        font-family: var(--font-heading);
        font-size: 2.2rem;
        color: var(--text-white);
        text-decoration: none;
        letter-spacing: 0.05em;
        transition: color var(--transition-fast);

        &:hover {
          color: var(--accent-primary);
        }
      }
    }

    .w-full {
      width: 100%;
    }

    .mobile-contact-info {
      margin-top: 1.5rem;
      p {
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        color: var(--text-muted);
      }
      a {
        color: var(--accent-primary);
        font-weight: 700;
        text-decoration: none;
        font-size: 1.1rem;
      }
    }
  `]
})
export class NavbarComponent {
  modalService = inject(ModalService);
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
    document.body.style.overflow = this.mobileMenuOpen() ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}
