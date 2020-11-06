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
    
    oeuvre: JSON;
    
    oeuvreSubscription: Subscription;

  constructor(private portfolio: PortfolioService, private colors: ColorsServiceService, private route: ActivatedRoute) {
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('oeuvres').couleur);
  
  }

  ngOnInit() {
      
      this.id = parseInt(this.route.snapshot.params['id']);

      console.log(this.id);
      
      this.portfolio.getWorkById(this.id);
      
      this.oeuvreSubscription = this.portfolio.worksSubject.subscribe((oeuvre) => {
              
          this.oeuvre = oeuvre[0];
          console.table(this.oeuvre);
      });
      
      this.portfolio.emitWorks();
  }
    
    ngOnDestroy(){
        this.oeuvreSubscription.unsubscribe();
    }

}
