import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  
  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTags(title: string, description: string, keywords: string, pageURL: string, image: string) {
      
      this.titleService.setTitle(title);
      this.meta.updateTag({ name: 'author', content: title });
      this.meta.updateTag({ name: 'keywords', content: keywords });
      this.meta.updateTag({ name: 'description', content: description });

      this.meta.updateTag({ name: 'twitter:title', content: title });
      this.meta.updateTag({ name: 'twitter:description', content: description });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:image', content: image });

      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:url', content: pageURL });
      this.meta.updateTag({ property: 'og:image', content: image });

      this.meta.updateTag({ itemprop: 'name', content: title });
      this.meta.updateTag({ itemprop: 'description', content: description });

      this.setCanonicalURL(pageURL);
  }

  setCanonicalURL(url: string) {
      // Remove any existing canonical link
      this.meta.removeTag('rel=canonical');

      // Add the new canonical link
      this.meta.addTag({ rel: 'canonical', href: url });
  }
  
}
