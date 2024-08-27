import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { register } from 'swiper/element/bundle';
register();
import { PurposeComponent } from './components/home/purpose/purpose.component';
import { PresenceComponent } from './components/home/presence/presence.component';
import { BusinessesComponent } from './components/home/businesses/businesses.component';
import { SocialResponsibilityComponent } from './components/home/social-responsibility/social-responsibility.component';
import { LeadershipComponent } from './components/home/leadership/leadership.component';
import { NewsMediaComponent } from './components/home/news-media/news-media.component';
import { CareersComponent } from './pages/careers/careers.component';
import { NumberCounterComponent } from './components/number-counter/number-counter.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ParallaxOnHoverComponent } from './components/parallax-on-hover/parallax-on-hover.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { NewsMediaListComponent } from './pages/news-media-list/news-media-list.component';
import { TabViewModule } from 'primeng/tabview';
import { PressReleasesComponent } from './components/press-releases/press-releases.component';
import { InTheNewsComponent } from './components/in-the-news/in-the-news.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CalendarModule } from 'primeng/calendar';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    PurposeComponent,
    PresenceComponent,
    BusinessesComponent,
    SocialResponsibilityComponent,
    LeadershipComponent,
    NewsMediaComponent,
    CareersComponent,
    NumberCounterComponent,
    ParallaxOnHoverComponent,
    BannerComponent,
    PrivacyPolicyComponent,
    NewsMediaListComponent,
    PressReleasesComponent,
    InTheNewsComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DialogModule,
    AnimateOnScrollModule,
    FloatLabelModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    TabViewModule,
    IconFieldModule,
    InputIconModule,
    CalendarModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
