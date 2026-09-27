import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  isReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  animateCounter(
    element: HTMLElement,
    targetValue: number,
    duration: number = 2000,
    prefix: string = '',
    suffix: string = '+'
  ): void {
    if (this.isReducedMotion()) {
      element.innerText = `${prefix}${targetValue}${suffix}`;
      return;
    }

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easedProgress * targetValue);
      element.innerText = `${prefix}${current}${suffix}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.innerText = `${prefix}${targetValue}${suffix}`;
      }
    };
    window.requestAnimationFrame(step);
  }

  scrollToSection(sectionId: string): void {
    if (typeof document === 'undefined') return;
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: this.isReducedMotion() ? 'auto' : 'smooth' });
    }
  }
}
