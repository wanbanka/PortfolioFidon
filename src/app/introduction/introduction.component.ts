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

  ngOnInit() {
      
      this.portfolio.getSections();
      
      this.sectionSubscription = this.portfolio.sectionsSubject.subscribe((sections: any[]) => {

            this.sections = sections;
          console.table(this.sections);
    });
      
          this.portfolio.emitSections();
      
  }
    
    ngOnDestroy(){
        this.sectionSubscription.unsubscribe();
    }

}
