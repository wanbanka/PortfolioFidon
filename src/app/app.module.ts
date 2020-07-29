import { BrowserModule } from '@angular/platform-browser';

import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgTimelineVerticalModule} from 'ng-timeline-vertical';
import {KonvaModule} from 'ng2-konva';
import {NgxLoadingSpinnerModule, NgxLoadingSpinnerInterceptor} from 'ng-loading-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { SingleOeuvreComponent } from './single-oeuvre/single-oeuvre.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import {PortfolioService} from './Services/portfolio.service';
import {ColorsServiceService} from './Services/colors-service.service';
import { HTMLPipe } from './Pipes/html.pipe';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    IntroductionComponent,
    WorksComponent,
    ContactComponent,
    SingleOeuvreComponent,
    FourOhFourComponent,
    HTMLPipe
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      NgTimelineVerticalModule,
      KonvaModule,
      NgxLoadingSpinnerModule
  ],
  providers: [
      PortfolioService,
      ColorsServiceService,
      {provide: LOCALE_ID, useValue: 'fr'},
      {provide: HTTP_INTERCEPTORS, useClass: NgxLoadingSpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
