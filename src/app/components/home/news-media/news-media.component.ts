import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { MetaDataService } from '../../../services/meta-data.service';
import Swiper from 'swiper';


@Component({
  selector: 'app-news-media',
  templateUrl: './news-media.component.html',
  styleUrl: './news-media.component.scss'
})
export class NewsMediaComponent {

  private swiper: Swiper | undefined;
  ourPhilosophyVideo: boolean = false

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document, private metaTagsData: MetaDataService
  ) { }

  private initSwiper() {
    if (isPlatformBrowser(this.platformId)) {
      this.swiper = new Swiper(".newMediaCarousel", {
        slidesPerView: 1.1,
        spaceBetween: 0,
        autoHeight: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        allowTouchMove: true,
        speed: 1500,
        breakpoints: {
          640: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2.1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
        
      });


    }
  }

  ngAfterContentInit(): void {
    this.initSwiper();
  }

  ngOnInit():void{
    const title = 'News & Media | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `News & Media`;
    const pageURL = ``;
    const image = '';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }

}
