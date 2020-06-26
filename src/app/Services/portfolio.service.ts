import { Injectable } from '@angular/core';

import {Subject, Observable} from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }
    
    private sections : any[] = [];

private exhibitions : any[] = [];

sectionsSubject : Subject<any[]> = new Subject<any[]>();

exhibitionsSubject : Subject<any[]> = new Subject<any[]>();

emitSections(){
    this.sectionsSubject.next(this.sections.slice());
}

emitExhibitions(){
    this.exhibitionsSubject.next(this.exhibitions.slice());
}

private putSections(donnees : any){
    this.sections = donnees;
    this.emitSections();
}

private putExhibitions(donnees : any){
    this.exhibitions = donnees;
    this.emitExhibitions();
}

 getSections(){
        this.getDonnees('sections');
    }

getExhibitions(){
    this.getDonnees('expositions');
}


private getDonnees(option : string){
    
    let params = new HttpParams().set('api_key', 'e4530cf5701e631bbd5837b70fba9f9294f44f122c4a961b1577c9ed7176e633d351958ad03993b3a2a38dfae9f4c18f0b099ed8720058ea9ea8437f51d70945').set('option', option);
        
        this.http.get<any[]>('https://theosenilh.fr/api_fidon/recherche_donnees.php', {params}).subscribe((donnees) => {
            
            switch(option){
                case 'sections':
                    this.putSections(donnees);
                    break;
                    
                case 'expositions':
                    this.putExhibitions(donnees);
                    break;
            }
                       },
                    (error) => {
            console.log(error);
        }
                        
                        );
    
}
    
}
