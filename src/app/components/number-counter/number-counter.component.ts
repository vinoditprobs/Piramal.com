import { Component, HostListener, Input, AfterViewInit, OnInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-number-counter',
  templateUrl: './number-counter.component.html',
  styleUrl: './number-counter.component.scss'
})
export class NumberCounterComponent {

  @Input() minCount: number = 0; // Default minimum count
  @Input() maxCount: number = 100; // Default maximum count
  @Input() duration: number = 10000;
  
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  count: number = this.minCount;
  startCount: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.document.querySelector('.counter-container');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.6 && !this.startCount) {
          this.startCount = true;
          this.startCounter();
        }
      }
    }
  }

  startCounter() {
    const targetCount = this.maxCount;
    const duration = this.duration; // Animation duration in milliseconds
    const step = (Math.trunc(targetCount - this.minCount) / duration) * 100; // Adjust for smoother animation

    const interval = setInterval(() => {
      if (this.count < targetCount) {
        this.count += step;
        
        if (this.count > targetCount) {
          this.count = targetCount;
        }
  
      } else {
        this.count = targetCount;
        clearInterval(interval);
      }
     
    }, 45);
  }
  

  ngAfterViewInit(): void {
   // this.startCounter();
    
  }

}

