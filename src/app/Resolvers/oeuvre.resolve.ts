import { Injectable } from '@angular/core';

import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';

import {PortfolioService} from '../Services/portfolio.service';

@Injectable({
  providedIn: 'root'
})

export class OeuvreResolver implements Resolve<any> {
    
    constructor(private portfolio: PortfolioService, private router: Router){
        
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    let id = route.paramMap.get('id');
    
    let longueur: number;
    
    console.log(id);
    
    this.portfolio.getWorkById(+id);
    
    let check = this.portfolio.worksSubject.subscribe((oeuvre) => {
    
    console.table(oeuvre);
    
    console.log(oeuvre.length);
    
    longueur = oeuvre.length;
    
    if(oeuvre.length === 0){
        this.router.navigate(['/not-found']);
} else {
 
    this.router.navigateByUrl('/oeuvres/' + id);
    
}
    
});

setTimeout(() => {
    
    check.unsubscribe();
    
}, 1000);
    
}
    
}