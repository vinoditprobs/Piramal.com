import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, DOCUMENT } from "@angular/common";
import { MetaDataService } from "../../../services/meta-data.service";

@Component({
  selector: "app-businesses",
  templateUrl: "./businesses.component.html",
  styleUrl: "./businesses.component.scss",
})
export class BusinessesComponent {
  financialServices: boolean = false;
  pharmaCeuticals: boolean = false;
  realEstate: boolean = false;
  default: boolean = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document, private metaTagsData: MetaDataService
  ) {

  }

  resetAll() {
    this.pharmaCeuticals = false;
    this.realEstate = false;
    this.financialServices = false;
    this.default = false;
  }

  clickFinancialServices() {
    this.resetAll();
    this.financialServices = true;
  }
  clickPharmaCeuticals() {
    this.resetAll();
    this.pharmaCeuticals = true;
  }
  clickRealEstate() {
    this.resetAll();
    this.realEstate = true;
  }



  ngOnInit():void{
    const title = 'Businesses | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Businesses with Piramal`;
    const pageURL = ``;
    const image = 'assets/images/businesses-bg.jpg';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);
  }

  ngAfterViewInit(){
    const hashData = this.document.querySelectorAll('.hash-data');
     if(hashData){
      hashData.forEach((element) => {
      element.addEventListener('click', () => {
         const matchAttr =  element.getAttribute('hash-data-attr');
            if(matchAttr === 'financialServices'){
            this.clickFinancialServices()
            }else if(matchAttr === 'pharmaCeuticals'){
            this.clickPharmaCeuticals()
            }
            else if(matchAttr === 'realEstate'){
            this.clickRealEstate()
            }
         });
      })
     }
  }

}
