import { Injectable } from '@angular/core';

import {Subject, Observable} from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }
    
    private sections : any[] = [];

sectionsSubject : Subject<any[]> = new Subject<any[]>();

emitSections(){
    this.sectionsSubject.next(this.sections.slice());
}
    
    getSections(){
        
        let params = new HttpParams().set('api_key', 'e4530cf5701e631bbd5837b70fba9f9294f44f122c4a961b1577c9ed7176e633d351958ad03993b3a2a38dfae9f4c18f0b099ed8720058ea9ea8437f51d70945');
        
        this.http.get<any[]>('https://theosenilh.fr/api_fidon/recherche_sections.php', {params}).subscribe((sections) => {
                       this.sections = sections;
                         this.emitSections();
                       },
                    (error) => {
            console.log(error);
        }
                        
                        );
    }
    
}
