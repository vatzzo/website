import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ExpoComponent } from './expo/expo.component';
import { HomeMobileComponent } from './home-mobile/home-mobile.component';
import { InfoMobileComponent } from './info-mobile/info-mobile.component';
import { PortfolioMobileComponent } from './portfolio-mobile/portfolio-mobile.component';
import { ExpoMobileComponent } from './expo-mobile/expo-mobile.component';
import { ContactMobileComponent } from './contact-mobile/contact-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    PortfolioComponent,
    ContactComponent,
    ExpoComponent,
    HomeMobileComponent,
    InfoMobileComponent,
    PortfolioMobileComponent,
    ExpoMobileComponent,
    ContactMobileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
