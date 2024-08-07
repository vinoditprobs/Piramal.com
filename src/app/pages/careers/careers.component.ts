import { Component } from '@angular/core';
import { MetaDataService } from '../../services/meta-data.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {

  constructor(private metaTagsData:MetaDataService){}

  ngOnInit():void{
    const title = 'Career | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Career with Piramal, Job at Piramal, Business with Piramal`;
    const pageURL = ``;
    const image = 'assets/images/career-banner.jpg';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }
}
