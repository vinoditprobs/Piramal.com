import { Component, Inject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from "@angular/common";
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerMenu: boolean = false

  currentSection: string = '';

  constructor(@Inject(DOCUMENT) private document: Document,  private scrollSpyService: ScrollSpyService, private router: Router){}


  toggleFooterMenu(){
    this.footerMenu = !this.footerMenu
  }

  mainMenu: boolean = false;
  body = this.document.querySelector('body');

  ngOnInit() {
     this.scrollSpyService.initScrollSpy(this.updateCurrentSection.bind(this));
  }
  updateCurrentSection(sectionId: string) {
    this.currentSection = sectionId;
  }
  scrollTo(section: string) {
    if(this.router.url === '/'){
      this.scrollSpyService.scrollTo(section);
    }else{
      this.router.navigate(['/']);
      setTimeout(() => {
        this.scrollSpyService.initScrollSpy(this.updateCurrentSection.bind(this));
        this.scrollSpyService.scrollTo(section);
      }, 200)
    }
  }
   

 
    
  

}
