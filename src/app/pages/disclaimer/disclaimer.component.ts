import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaDataService } from "../../services/meta-data.service";
import { isPlatformBrowser, DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.scss'
})
export class DisclaimerComponent {

  constructor(private metaTagsData: MetaDataService, @Inject(PLATFORM_ID) private platformId: Object,){}

  goBack(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.history.back();
    }
  }

  ngOnInit() {
    const title = 'Disclaimer | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Conatct Piramal, Join Piramal, Business with Piramal`;
    const pageURL = ``;
    const image = 'assets/images/contact-banner.webp';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }

}
