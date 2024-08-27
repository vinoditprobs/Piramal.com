import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { NewsMediaListComponent } from './pages/news-media-list/news-media-list.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'careers', component:CareersComponent},
  {path:'contact', component:ContactComponent},
  {path:'news-and-media', component:NewsMediaListComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'disclaimer', component:DisclaimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: "top",
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
