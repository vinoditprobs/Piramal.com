import { Component } from '@angular/core';
import { MetaDataService } from '../../../services/meta-data.service';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrl: './purpose.component.scss'
})
export class PurposeComponent {

  currentStep: string = 'step1';

  handleSteps(step: string) {
    this.currentStep = step;
  }

  constructor(private metaTagsData: MetaDataService){}

  ngOnInit():void{
    const title = 'Purpose | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Purpose`;
    const pageURL = ``;
    const image = '';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }

 
}
