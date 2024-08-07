import { Component } from '@angular/core';

interface inquiryType {
  name: string;
  code: string;
}

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrl: './press-releases.component.scss'
})
export class PressReleasesComponent {

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
