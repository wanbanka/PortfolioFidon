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

private works : any[] = [];

sectionsSubject : Subject<any[]> = new Subject<any[]>();

exhibitionsSubject : Subject<any[]> = new Subject<any[]>();

worksSubject : Subject<any[]> = new Subject<any[]>();

emitSections(){
    this.sectionsSubject.next(this.sections.slice());
}

emitExhibitions(){
    this.exhibitionsSubject.next(this.exhibitions.slice());
}

emitWorks(){
    this.worksSubject.next(this.works.slice());
}

private putSections(donnees : any){
    this.sections = donnees;
    this.emitSections();
}

private putExhibitions(donnees : any){
    this.exhibitions = donnees;
    this.emitExhibitions();
}

private putWorks(donnees : any){
    this.works = donnees;
    this.emitWorks();
}

 getSections(){
        this.getDonnees('sections');
    }

getExhibitions(){
    this.getDonnees('expositions');
}

getWorks(){
    this.getDonnees('oeuvres');
}

range(start : number, end : number){
        if(start === end){
            return [start];
        } else {
            return [start, ...this.range(start + 1, end)];
        }
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
                    
                case 'oeuvres':
                    this.putWorks(donnees);
                    break;
            }
                       },
                    (error) => {
            console.log(error);
        }
                        
                        );
    
}

getWorkById(id: number){
    
    let params = new HttpParams().set('api_key', 'e4530cf5701e631bbd5837b70fba9f9294f44f122c4a961b1577c9ed7176e633d351958ad03993b3a2a38dfae9f4c18f0b099ed8720058ea9ea8437f51d70945').set('oeuvre_id', ''+ id +'');
    
    this.http.get<any[]>('https://theosenilh.fr/api_fidon/recherche_donnees.php', {params}).subscribe((donnees) => {
            this.putWorks(donnees);
                       },
                    (error) => {
            console.log(error);
        }
                        
                        );
    
}
    
}
