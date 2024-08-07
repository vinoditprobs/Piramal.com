import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaDataService } from "../../services/meta-data.service";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-news-media-list',
  templateUrl: './news-media-list.component.html',
  styleUrl: './news-media-list.component.scss'
})
export class NewsMediaListComponent {

  topOffset: number = 70

  constructor(private metaTagsData: MetaDataService, @Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object, ){}
  
  ngOnInit() {
    const title = 'News and Media | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Conatct Piramal, Join Piramal, Business with Piramal`;
    const pageURL = ``;
    const image = 'assets/images/contact-banner.webp';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);

    if (isPlatformBrowser(this.platformId)) {
        window.onresize = () => {
          this.changeOffset();
        }
    }
    this.changeOffset();

  }

  changeOffset(){
    if (isPlatformBrowser(this.platformId)) {
      if(window.matchMedia('(min-width: 1200px)').matches){
        this.topOffset = 100
      }else{
        this.topOffset = 70
      }
    }
  }

  onTabChange(){
    if (isPlatformBrowser(this.platformId)) {
      const tabSection = this.document.getElementById('tabSection');
      if(tabSection){
        const sectionTop = tabSection.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: sectionTop - this.topOffset,
          behavior: 'smooth'
        })
      }
    }
  }

}
