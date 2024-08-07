import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../../services/meta-data.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrl: './presence.component.scss'
})
export class PresenceComponent {

  constructor(private metaTagsData: MetaDataService){}

  ngOnInit():void{
    const title = 'Presence | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Presence`;
    const pageURL = ``;
    const image = '';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }

}
