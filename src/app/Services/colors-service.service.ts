import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsServiceService {

  constructor() { }
    
    tableauCouleurs: any[] = [
    {
        page: '',
     couleur: '#8ca0b9'
    },
    
    {
        page: 'presentation',
        couleur: '#dcda6f'
    },
    
    {
        page: 'oeuvres',
        couleur: '#f28e57'
    },
    
    {
        page: 'contact',
        couleur: '#ffffff'
    }
];

rechercheCouleur(nomPage: string){
    return this.tableauCouleurs.find((numero) => {
        return nomPage === numero.page;
    });
}
    
}
