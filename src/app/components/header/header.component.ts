import { Component, Inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DOCUMENT } from '@angular/common';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentSection: string = '';

  constructor(private primengConfig: PrimeNGConfig, @Inject(DOCUMENT) private document: Document, private scrollSpyService: ScrollSpyService, private router: Router) {}

  mainMenu: boolean = false;
  body = this.document.querySelector('body');

  ngOnInit() {
      this.primengConfig.ripple = true;
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
   
  toggleMenu() {
    this.mainMenu = !this.mainMenu;
    if(this.mainMenu){
      this.body?.classList.add('menu_open')
    }else{
      this.body?.classList.remove('menu_open')
    }
  }
  
  closeMenu(){
    if(this.mainMenu){
      setTimeout(() => {
        this.mainMenu = false;
        this.body?.classList.remove('menu_open')
      }, 400) 
    }
  }
   


}
