import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgTimelineVerticalModule} from 'ng-timeline-vertical';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { SingleOeuvreComponent } from './single-oeuvre/single-oeuvre.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import {PortfolioService} from './Services/portfolio.service';
import { HTMLPipe } from './Pipes/html.pipe';

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
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      NgTimelineVerticalModule
  ],
  providers: [
      PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
