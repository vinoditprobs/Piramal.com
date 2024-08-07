import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {
  

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit():void{
    const body =  this.document.querySelector('body')
    body?.classList.add('overflow-lg-hidden');
  }

  ngOnDestroy(){
    const body =  this.document.querySelector('body')
    body?.classList.remove('overflow-lg-hidden');
  }
}
