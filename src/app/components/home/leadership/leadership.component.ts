import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MetaDataService } from '../../../services/meta-data.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss',
  providers:[DataService]
})
export class LeadershipComponent {

  currentStep: string = 'step1';

  handleSteps(step: string) {
    this.currentStep = step;
  }

  data: any[] = [];
  
  profileDetail: boolean = false;
  selectedProfile: any;

  constructor(public dataService: DataService, private metaTagsData: MetaDataService){}

  ngOnInit(): void{
    this.dataService.getLeadershipData().subscribe((data:any[]) => {
      this.data = data
    })

    const title = 'Leadership | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Leadership`;
    const pageURL = ``;
    const image = 'assets/images/profile/ajay-piramal.jpg';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);

  }

  showProfileDetail(profile: any): void {
    this.selectedProfile = profile;
    this.profileDetail = true;
  }

}
