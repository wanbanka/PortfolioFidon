import { Component, OnInit, OnDestroy } from '@angular/core';

import {PortfolioService} from '../Services/portfolio.service';

import {ColorsServiceService} from '../Services/colors-service.service';

import {ActivatedRoute} from '@angular/router';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-oeuvre',
  templateUrl: './single-oeuvre.component.html',
  styleUrls: ['./single-oeuvre.component.scss']
})
export class SingleOeuvreComponent implements OnInit, OnDestroy {
    
    id: number;
    
    oeuvre;
    
    oeuvreSubscription: Subscription;

  constructor(private portfolio: PortfolioService, private colors: ColorsServiceService, private route: ActivatedRoute) {
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('oeuvres').couleur);
  
  }

  ngOnInit() {
      
      this.id = this.route.snapshot.params['id'];
      
      this.portfolio.getWorks();
      
      this.oeuvreSubscription = this.portfolio.worksSubject.subscribe((oeuvre) => {
          this.oeuvre = oeuvre;
          console.table(this.oeuvre);
      });
      
      this.portfolio.emitWorks();
      
      this.oeuvre = this.portfolio.getWorkById(+this.id);
      
      console.log(this.oeuvre);
  }
    
    ngOnDestroy(){
        this.oeuvreSubscription.unsubscribe();
    }

}
