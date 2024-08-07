import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { MetaDataService } from '../../../services/meta-data.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  private swiper: Swiper | undefined;
  ourPhilosophyVideo: boolean = false

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document, private metaTagsData: MetaDataService) { }

  private initSwiper() {

    if (isPlatformBrowser(this.platformId)) {

      this.swiper = new Swiper(".main_banner_swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: false,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        allowTouchMove: false,
        speed: 2000,
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
        on: {
          slideChangeTransitionStart: () => {
            this.pauseAllVideos();
          },
          slideChangeTransitionEnd: () => {
            this.document.addEventListener('click', () => {
              this.playCurrentVideo();
            });
          }
        },
      });

      setTimeout(() => {
        if (this.swiper) {
          this.swiper.update();
        }
      }, 3000)

    }
  }

  private pauseAllVideos() {
    const videos = this.el.nativeElement.querySelectorAll(".slide_video");
    videos.forEach((element: Element) => {
      const video = element as HTMLVideoElement;
      video.pause();
    });
  }
  private playCurrentVideo() {
    if (this.swiper) {
      const activeSlide = this.swiper.slides[this.swiper.activeIndex];
      const video = activeSlide.querySelector(".slide_video") as HTMLVideoElement;
      if (video) {
        if (video.muted || video.defaultMuted || video.volume === 0) {
          video.play();
        }
      }
    }
  }
  ngAfterContentInit(): void {
    this.initSwiper();
  }

  showVideoDialog(){
    this.ourPhilosophyVideo = true
  }


  ngOnInit():void{

    const title = 'Piramal | We Do Well So We Can Do Good';
    const description = 'We Do Well So We Can Do Good ...';
    const keywords = `Piramal, Piramal Finance, Piramal Pharma, Piramal Reality`;
    const pageURL = ``;
    const image = 'assets/images/home-banner/slide-1.webp';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
    
  }


  

}

