import { Component, ElementRef, ViewChild, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero-section">
      <!-- BACKGROUND CINEMATIC VIDEO / POSTER FALLBACK -->
      <div class="video-container">
        <video 
          #heroVideo
          class="video-backdrop"
          poster="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=85"
          autoplay
          muted
          loop
          playsinline
          [attr.aria-hidden]="true"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-runs-on-the-treadmill-at-the-gym-41558-large.mp4" type="video/mp4">
        </video>
        <div class="overlay-dark"></div>
        <div class="grain-overlay"></div>
      </div>

      <!-- HERO MAIN CONTENT CONTENT -->
      <div class="container-custom hero-content">
        <div class="badge-wrapper">
          <span class="badge-tag">
            <span class="pulse-dot"></span>
            CHENNAI'S PREMIER FITNESS SANCTUARY
          </span>
        </div>

        <h1 class="hero-brand-title">
          IRON<span class="accent-text">PULSE</span>
        </h1>

        <h2 class="hero-tagline">
          TRAIN HARD.<br>
          <span class="gradient-text">LIVE STRONG.</span>
        </h2>

        <p class="hero-description">
          A smarter, science-backed approach to heavy barbell strength, high-performance athletic conditioning, and irreversible body transformation.
        </p>

        <!-- CTA BUTTONS -->
        <div class="hero-cta-group">
          <button (click)="modalService.openFreeTrial()" class="btn-primary">
            START TRAINING
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <a (click)="scrollTo('programs')" class="btn-outline">
            EXPLORE PROGRAMS
          </a>
        </div>

        <!-- VIDEO CONTROL BUTTON (Requirement #6) -->
        <div class="video-controls">
          <button (click)="toggleVideoPlay()" class="btn-video-toggle" [attr.aria-label]="isVideoPlaying() ? 'Pause video' : 'Play video'">
            <span class="status-indicator" [class.paused]="!isVideoPlaying()"></span>
            <span class="control-label">{{ isVideoPlaying() ? '◉ PAUSE VIDEO' : '▶ PLAY VIDEO' }}</span>
          </button>
        </div>
      </div>

      <!-- SCROLL INDICATOR -->
      <div class="scroll-indicator" (click)="scrollTo('intro')">
        <span class="scroll-text">SCROLL</span>
        <div class="mouse-icon">
          <div class="wheel"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 6rem;
      padding-bottom: 4rem;
      overflow: hidden;
      background: #0a0a0c;
    }

    .video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 980px;
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      background-color: var(--accent-primary);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--accent-primary);
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }

    .hero-brand-title {
      font-size: clamp(3.5rem, 11vw, 8.5rem);
      font-weight: 900;
      line-height: 0.85;
      letter-spacing: 0.04em;
      margin-top: 1rem;
      color: var(--text-white);

      .accent-text {
        color: var(--accent-primary);
        text-shadow: 0 0 40px var(--accent-glow);
      }
    }

    .hero-tagline {
      font-size: clamp(2.2rem, 6.5vw, 4.8rem);
      font-weight: 900;
      line-height: 0.95;
      margin-top: 0.75rem;
      margin-bottom: 1.25rem;

      .gradient-text {
        background: linear-gradient(135deg, #ffffff 0%, var(--accent-primary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .hero-description {
      font-size: clamp(1rem, 2vw, 1.25rem);
      color: var(--text-muted);
      max-width: 680px;
      margin-bottom: 2.5rem;
    }

    .hero-cta-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .video-controls {
      display: flex;
      justify-content: center;

      .btn-video-toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        background: rgba(18, 18, 23, 0.75);
        border: 1px solid var(--border-subtle);
        padding: 0.5rem 1.1rem;
        border-radius: 40px;
        color: var(--text-muted);
        font-family: var(--font-subheading);
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        cursor: pointer;
        backdrop-filter: blur(10px);
        transition: all var(--transition-fast);

        &:hover {
          color: var(--text-white);
          border-color: var(--text-white);
          background: rgba(255, 255, 255, 0.1);
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 8px #00ff88;

          &.paused {
            background: var(--accent-primary);
            box-shadow: 0 0 8px var(--accent-primary);
          }
        }
      }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity var(--transition-fast);

      &:hover {
        opacity: 1;
      }

      .scroll-text {
        font-family: var(--font-subheading);
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.25em;
        color: var(--text-muted);
      }

      .mouse-icon {
        width: 22px;
        height: 36px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        padding-top: 6px;

        .wheel {
          width: 3px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 2px;
          animation: scrollWheel 1.8s infinite;
        }
      }
    }

    @keyframes scrollWheel {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(12px); opacity: 0; }
    }
  `]
})
export class HeroComponent implements OnInit {
  @ViewChild('heroVideo') videoRef!: ElementRef<HTMLVideoElement>;
  
  modalService = inject(ModalService);
  animationService = inject(AnimationService);
  
  isVideoPlaying = signal(true);

  ngOnInit() {
    if (this.animationService.isReducedMotion()) {
      this.isVideoPlaying.set(false);
    }
  }

  toggleVideoPlay() {
    if (!this.videoRef?.nativeElement) return;
    const video = this.videoRef.nativeElement;
    if (video.paused) {
      video.play();
      this.isVideoPlaying.set(true);
    } else {
      video.pause();
      this.isVideoPlaying.set(false);
    }
  }

  scrollTo(id: string) {
    this.animationService.scrollToSection(id);
  }
}
