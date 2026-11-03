import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-story6sdg2026',
  templateUrl: './story6sdg2026.component.html',
  styleUrls: ['./story6sdg2026.component.css']
})
export class Story6sdg2026Component implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver = null;
  private frames: number[] = [];
  private printListener: () => void;

  constructor(private host: ElementRef<HTMLElement>) {
    this.printListener = () => this.restoreForPrint();
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeprint', this.printListener);
    }
    if (this.prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      return;
    }
    root.classList.add('will-animate');
    root.querySelectorAll('[data-count]').forEach((node) => {
      const el = node as HTMLElement;
      el.textContent = this.formatCount(el, 0);
    });
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !this.observer) {
          return;
        }
        const section = entry.target as HTMLElement;
        section.classList.add('is-in');
        this.animateSection(section);
        this.observer.unobserve(section);
      });
    }, {threshold: 0.2});
    root.querySelectorAll('.reveal').forEach((section) => {
      this.observer.observe(section);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.frames.forEach((id) => cancelAnimationFrame(id));
    if (typeof window !== 'undefined') {
      window.removeEventListener('beforeprint', this.printListener);
    }
  }

  private restoreForPrint(): void {
    this.frames.forEach((id) => cancelAnimationFrame(id));
    this.frames = [];
    const root = this.host.nativeElement;
    root.classList.remove('will-animate');
    root.querySelectorAll('details').forEach((node) => {
      (node as HTMLDetailsElement).open = true;
    });
    root.querySelectorAll('.reveal').forEach((section) => {
      section.classList.add('is-in');
    });
    root.querySelectorAll('[data-count]').forEach((node) => {
      const el = node as HTMLElement;
      const finalText = el.getAttribute('data-final');
      if (finalText) {
        el.textContent = finalText;
      }
    });
  }

  private prefersReducedMotion(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return true;
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private animateSection(section: HTMLElement): void {
    section.querySelectorAll('[data-count]').forEach((node) => {
      this.animateCount(node as HTMLElement);
    });
  }

  private animateCount(el: HTMLElement): void {
    const target = parseFloat(el.getAttribute('data-count') || '0');
    if (isNaN(target)) {
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = this.formatCount(el, target * eased);
      if (progress < 1) {
        this.frames.push(requestAnimationFrame(step));
      } else {
        el.textContent = el.getAttribute('data-final') || this.formatCount(el, target);
      }
    };
    this.frames.push(requestAnimationFrame(step));
  }

  private formatCount(el: HTMLElement, value: number): string {
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const shown = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
    return prefix + shown + suffix;
  }
}
