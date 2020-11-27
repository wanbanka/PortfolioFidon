import { Injectable } from '@angular/core';

import {Subject, Observable} from 'rxjs';

import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

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

/**

* Emet toutes les sections récupérées de la base de données
* @returns void

*/
emitSections(){
    this.sectionsSubject.next(this.sections.slice());
}

/**

* Emet toutes les expositions récupérées de la base de données
* @returns void

*/

emitExhibitions(){
    this.exhibitionsSubject.next(this.exhibitions.slice());
}

/**

* Emet tous les travaux récupérées de la base de données
* @returns void

*/

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

/**

* Récupère toutes les sections
* @returns void

*/

 getSections(){
        this.getDonnees('sections');
    }

/**

* Récupère toutes les expositions
* @returns void

*/

getExhibitions(){
    this.getDonnees('expositions');
}

/**

* Récupère tous les travaux
* @returns void

*/

getWorks(){
    this.getDonnees('oeuvres');
}


getWorksLength(){
    return this.works.length;
}

/**

* Renvoie un tableau contenant toutes les valeurs entre le premier et le deuxième nombre
* @param start number
* @param end number
* @returns number[]
* @throws Exception

*/

range(start : number, end : number){
    
    if(start > end){
        throw "Premier paramètre supérieur au deuxième";
        return;
    }
    
        if(start === end){
            return [start];
        } else {
            return [start, ...this.range(start + 1, end)];
        }
    }


private getDonnees(option : string){

    let headers = new HttpHeaders();

    headers.append('Access-Control-Allow-Origin', '*');


    let url = 'http://fierce-shore-44576.herokuapp.com/api/api' + option;

    let params = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    params.set('Content-Type', 'application/json; charset=utf-8');
        
        this.http.get<any[]>(url, {headers: params}).subscribe((donnees) => {

            
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
        });
}

/**

* Récupère un travail suivant son id
* @param id number
* @returns void

*/

getWorkById(id: number){

    let idOeuvre = '' + id;
    
    this.http.get<any[]>('http://fierce-shore-44576.herokuapp.com/api/apioeuvres/' + idOeuvre).subscribe((donnees) => {
        console.table(donnees);
            this.putWorks([donnees]);
                       },
                    (error) => {
            console.log(error);
        }
                        
                        );
    
}

/**

* Envoie un mail
* @param donnees any[]
* @returns Promise<any>

*/

envoiMail(donnees: any[]): Promise<any>{
    
    let nom = encodeURI(donnees['nom']);
    let prenom = encodeURI(donnees['prenom']);
    let message = encodeURI(donnees['message']);
    
    let params = new HttpParams().set('nom', nom).set('prenom', prenom).set('mail', donnees['mail']).set('message', message);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.table(params);
    
    return new Promise((resolve, reject) => {
       
       this.http.post('http://fierce-shore-44576.herokuapp.com/api/sendmail', {params, headers: headers}, {responseType: 'text'}).subscribe((response) => {
           resolve(response);
       },
        (error) => {
           reject(error);
       });
        
    });
    
}
    
}
