import { Component, OnInit, OnDestroy } from '@angular/core';

import {PortfolioService} from '../Services/portfolio.service';

import {Subscription} from 'rxjs';

import {ColorsServiceService} from '../Services/colors-service.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, OnDestroy {

  constructor(private portfolio: PortfolioService, private colors: ColorsServiceService) { 
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('oeuvres').couleur);
      
  }
    
    anneeOeuvre: number;
    
    oeuvres : any[] = [];
    
    annees : any[] = [];
    
    displayOeuvres : any[] = [];
    
    worksSubscription : Subscription;

  ngOnInit() {
      
      this.portfolio.getWorks();
      
      this.worksSubscription = this.portfolio.worksSubject.subscribe((oeuvres) => {
         this.oeuvres = oeuvres;
          
          if(this.oeuvres.length > 0){

            this.oeuvres = oeuvres.sort((a: any, b: any) => {
              return a.annee - b.annee;
            });

            console.table(this.oeuvres);

            let annee_debut = parseInt(this.oeuvres[0].annee);

            let annee_fin = parseInt(this.oeuvres[this.oeuvres.length - 1].annee);
           
          this.annees = this.portfolio.range(annee_debut, annee_fin);
              
              this.anneeOeuvre = this.annees[this.annees.length - 1];
              
              this.filterWorks();
          }
          
      });
      
      this.portfolio.emitWorks();
  }
    
    filterWorks(){
        
        this.displayOeuvres = this.oeuvres.filter((oeuvre) => oeuvre.annee == this.anneeOeuvre);
    }
    
    
    ngOnDestroy(){
        this.worksSubscription.unsubscribe();
    }

}
