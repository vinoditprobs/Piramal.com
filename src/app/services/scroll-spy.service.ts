import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  currentSection: string = '';
  observer: IntersectionObserver | undefined;
  isThrottled: boolean = false; // Throttle scroll events
  offset: number = 0

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object, private router: Router
  ) {
    

    

  }

  initScrollSpy(callback: (sectionId: string) => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver(callback);
      this.setupSectionScrollListeners();

      
    }
  }

  private setupIntersectionObserver(callback: (sectionId: string) => void) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.getAttribute('id')!;
          callback(this.currentSection);
        }
      });
    }, options);

    const sections = this.document.querySelectorAll('.scrollspy');
    sections.forEach(section => {
      this.observer?.observe(section);
    });
  }

  private setupSectionScrollListeners() {
    const sections = this.document.querySelectorAll('.scrollspy');
    sections.forEach((section, index) => {
      section.addEventListener('scroll', () => this.handleSectionScroll(section, index));
      section.addEventListener('wheel', (event) => this.handleWheel(event as WheelEvent, section, index), { passive: false });
    });
  }

  private handleSectionScroll(section: Element, index: number) {
    if (!isPlatformBrowser(this.platformId)) return;

    const sectionScrollTop = section.scrollTop;
    const sectionScrollHeight = section.scrollHeight;
    const sectionClientHeight = section.clientHeight;

    if (sectionScrollTop + sectionClientHeight >= sectionScrollHeight) {
      const nextSection = this.document.querySelectorAll('.scrollspy')[index + 1];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  private handleWheel(event: WheelEvent, section: Element, index: number) {
    if (this.isThrottled) return;

    const sectionScrollTop = section.scrollTop;
    const sectionScrollHeight = section.scrollHeight;
    const sectionClientHeight = section.clientHeight;

    if (event.deltaY > 0 && sectionScrollTop + sectionClientHeight >= sectionScrollHeight) {
      event.preventDefault();
      this.scrollToNextSection(index);
    } else if (event.deltaY < 0 && sectionScrollTop === 0) {
      event.preventDefault();
      this.scrollToPreviousSection(index);
    }
    
    this.isThrottled = true;
    setTimeout(() => this.isThrottled = false, 650);
  }

  private scrollToNextSection(currentIndex: number) {
    const nextSection = this.document.querySelectorAll('.scrollspy')[currentIndex + 1];
    if (nextSection) {
      const sectionTop = nextSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
        top: sectionTop - this.offset,
        behavior: 'smooth'
      });
    }
  }

  private scrollToPreviousSection(currentIndex: number) {
    const previousSection = this.document.querySelectorAll('.scrollspy')[currentIndex - 1];
    if (previousSection) {
      const sectionTop = previousSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
        top: sectionTop - this.offset,
        behavior: 'smooth'
      });
    }
  }

  scrollTo(section: string) {
    const sectionElement = this.document.getElementById(section);
    sectionElement?.scrollIntoView({ behavior: 'smooth' });
  }
}




/*
For: Importing


  currentSection: string = '';

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngOnInit(): void {
    this.scrollSpyService.initScrollSpy(this.updateCurrentSection.bind(this));
  }

  updateCurrentSection(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: string) {
    this.scrollSpyService.scrollTo(section);
  }
  

*/