import { Component } from '@angular/core';
import { MetaDataService } from "../../services/meta-data.service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(private metaTagsData: MetaDataService){}

  ngOnInit() {
    const title = 'Privacy Policy | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Conatct Piramal, Join Piramal, Business with Piramal`;
    const pageURL = ``;
    const image = 'assets/images/contact-banner.webp';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }

}
