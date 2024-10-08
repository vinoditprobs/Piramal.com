import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaDataService } from "../../services/meta-data.service";
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(private metaTagsData: MetaDataService, @Inject(PLATFORM_ID) private platformId: Object,){}

  goBack(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.history.back();
    }
  }

  ngOnInit() {
    const title = 'Privacy Policy | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Conatct Piramal, Join Piramal, Business with Piramal`;
    const pageURL = ``;
    const image = 'assets/images/contact-banner.webp';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }

}
