import { Injectable } from '@angular/core';

import {Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {PortfolioService} from './portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorRouteGuardService implements CanActivate {

  constructor(private router: Router, private routez: ActivatedRoute, private portfolio: PortfolioService) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        let id = this.routez.snapshot.params['id'];
        
        this.portfolio.getWorkById(id);
        
        if(this.portfolio.getWorksLength() != 0){
            return true;
        } else {
            this.router.navigate(['/not-found']);
            return false;
        }
    }
}
