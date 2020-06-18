import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorksComponent } from './works/works.component';
import { SingleOeuvreComponent } from './single-oeuvre/single-oeuvre.component';
import { ContactComponent } from './contact/contact.component';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'presentation', component: IntroductionComponent},
    {path: 'oeuvres', component: WorksComponent},
    {path: 'oeuvres/:id', component: SingleOeuvreComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: 'not-found'},
    {path: 'not-found', component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
