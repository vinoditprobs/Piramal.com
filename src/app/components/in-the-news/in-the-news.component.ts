import { Component } from '@angular/core';


interface inquiryType {
  name: string;
  code: string;
}

@Component({
  selector: 'app-in-the-news',
  templateUrl: './in-the-news.component.html',
  styleUrl: './in-the-news.component.scss'
})
export class InTheNewsComponent {

  date: Date | undefined;
  
  inquiryTypes: inquiryType[] | undefined;
  selectedInquiryType: inquiryType | undefined;

  ngOnInit() {
    this.inquiryTypes = [
      { name: "Lorem Ipsum", code: "MU" },
      { name: "Lorem Ipsum", code: "BA" },
      { name: "Lorem Ipsum", code: "NA" },
    ];
  }
}
