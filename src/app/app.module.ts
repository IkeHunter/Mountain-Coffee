import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { SectionRoutingComponent } from './home/section-routing/section-routing.component';
import { SectionAboutComponent } from './home/section-about/section-about.component';
import { SectionFranchiseComponent } from './home/section-franchise/section-franchise.component';
import { SectionReviewsComponent } from './home/section-reviews/section-reviews.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    SectionRoutingComponent,
    SectionAboutComponent,
    SectionFranchiseComponent,
    SectionReviewsComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
