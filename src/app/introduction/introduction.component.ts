import { Component, OnInit, OnDestroy } from '@angular/core';

import {PortfolioService} from '../Services/portfolio.service';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit, OnDestroy {

  constructor(private portfolio: PortfolioService) { }
    
    sectionSubscription : Subscription;
    
    sections : any[] = [];
    
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
      
      this.remplirAnnees();
      
      this.index = this.annees.length - 1;
      
  }
    
    remplirAnnees(){
        let index = 11;
        
        while(index > -1){
            this.annees = [...this.annees, this.annee.getFullYear() - index];
            index -= 1;
        }
    }
    
    prevIndex(){
        (this.index == 0) ? this.index = 0 : this.index -= 1;
    }
    
    nextIndex(){
        (this.index == this.annees.length - 1) ? this.index = this.annees.length - 1 : this.index += 1;
    }
    
    ngOnDestroy(){
        this.sectionSubscription.unsubscribe();
    }

}
