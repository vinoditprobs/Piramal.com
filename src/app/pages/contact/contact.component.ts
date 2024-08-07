import { Component } from "@angular/core";
import { MetaDataService } from "../../services/meta-data.service";

interface City {
  name: string;
  code: string;
}
interface State {
  name: string;
  code: string;
}
interface Country {
  name: string;
  code: string;
}

interface inquiryType {
  name: string;
  code: string;
}

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  value: string | undefined;

  cities: City[] | undefined;
  states: State[] | undefined;
  countries: Country[] | undefined;
  inquiryTypes: inquiryType[] | undefined;

  selectedCity: City | undefined;
  selectedState: City | undefined;
  selectedCountry: City | undefined;
  selectedInquiryType: inquiryType | undefined;

  constructor(private metaTagsData: MetaDataService){}

  ngOnInit() {
    this.inquiryTypes = [
      { name: "Join Piramal", code: "MU" },
      { name: "New Business", code: "BA" },
      { name: "Other", code: "NA" },
    ];

    this.cities = [
      { name: "Mumbai", code: "MU" },
      { name: "Pune", code: "BA" },
      { name: "Nashik", code: "NA" },
      { name: "Nagpur", code: "CN" },
      { name: "Nanded", code: "PN" },
    ];
    this.states = [
      { name: "Maharashtra", code: "NY" },
      { name: "Delhi", code: "RM" },
      { name: "Gujrat", code: "LDN" },
      { name: "Rajasthan", code: "IST" },
      { name: "Andhra Pradesh", code: "PRS" },
    ];
    this.countries = [
      { name: "India", code: "IN" },
      { name: "United States", code: "US" },
      { name: "Australia", code: "AU" },
      { name: "Japan", code: "JP" },
      { name: "China", code: "CH" },
    ];


    const title = 'Contact Us | Piramal';
    const description = 'Lorem Ipsum';
    const keywords = `Conatct Piramal, Join Piramal, Business with Piramal`;
    const pageURL = ``;
    const image = 'assets/images/contact-banner.webp';
    this.metaTagsData.updateMetaTags(title, description, keywords, pageURL, image);

  }
}
