import { Component, OnInit, OnDestroy } from '@angular/core';

import {PortfolioService} from '../Services/portfolio.service';

import {ColorsServiceService} from '../Services/colors-service.service';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit, OnDestroy {

  constructor(private portfolio: PortfolioService, private colors: ColorsServiceService) {
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('presentation').couleur);
  
  }
    
    sectionSubscription : Subscription;
    
    exhibitionSubscription : Subscription;
    
    sections : any[] = [];
    
    exhibitions: any[] = [];
    
    displayExhibitions: any[] = [];
    
    annee : Date = new Date();
    
    annees : number[] = [];
    
    index : number = 0;

  ngOnInit() {
      
      this.portfolio.getSections();
      
      this.sectionSubscription = this.portfolio.sectionsSubject.subscribe((sections: any[]) => {

            this.sections = sections;
          console.table(this.sections);
    });
      
          this.portfolio.emitSections();
      
      
      
      this.portfolio.getExhibitions();
      
      this.exhibitionSubscription = this.portfolio.exhibitionsSubject.subscribe((exhibitions: any[]) => {
          this.exhibitions = exhibitions.sort((a, b) => {
              return a.date_debut - b.date_debut;
          });
          console.table(this.exhibitions);
          this.remplirAnnees();
      });
      
      this.portfolio.emitExhibitions();
      
  }
    
    remplirAnnees(){
        
        if(this.exhibitions.length != 0){
            
            let anneeDebut = new Date(this.exhibitions[this.exhibitions.length - 1].date_debut).getFullYear();
            
            let anneeFin = new Date(this.exhibitions[0].date_fin).getFullYear();
            
            this.annees = this.portfolio.range(anneeDebut, anneeFin);
            
            this.index = this.annees.length - 1;
            
            this.filtreExhibitions(this.annees[this.index]);
            
        }
    }
    
    filtreExhibitions(annee : number){
        
        this.displayExhibitions = this.exhibitions.filter((exhibition) => exhibition.date_debut.includes(annee));
        
        let egalDateIndex = this.displayExhibitions.findIndex((exhibition) => {
           return exhibition.date_debut === exhibition.date_fin;
        });
        
        if(egalDateIndex != -1){
            this.displayExhibitions[egalDateIndex].date_fin = '';
        }
        
        console.table(this.displayExhibitions);
        console.table(egalDateIndex);
        
    }
    
    prevIndex(){
        (this.index == 0) ? this.index = 0 : this.index--;
        this.filtreExhibitions(this.annees[this.index]);
    }
    
    nextIndex(){
        (this.index == this.annees.length - 1) ? this.index = this.annees.length - 1 : this.index++;
        this.filtreExhibitions(this.annees[this.index]);
    }
    
    ngOnDestroy(){
        this.sectionSubscription.unsubscribe();
        this.exhibitionSubscription.unsubscribe();
    }

}
