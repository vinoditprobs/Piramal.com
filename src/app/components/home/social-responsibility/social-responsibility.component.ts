import { Component, HostListener } from '@angular/core';
import { MetaDataService } from '../../../services/meta-data.service';

@Component({
  selector: 'app-social-responsibility',
  templateUrl: './social-responsibility.component.html',
  styleUrl: './social-responsibility.component.scss'
})
export class SocialResponsibilityComponent {

  constructor(private metaTagsData: MetaDataService){}

  ngOnInit():void{
    const title = 'Social Responsibility | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Social Responsibility`;
    const pageURL = ``;
    const image = '';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }
}
