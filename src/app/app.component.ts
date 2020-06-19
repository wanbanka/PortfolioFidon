import { Component } from '@angular/core';

import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    constructor(private location: Location){
        this.nomPage = this.location.path().replace('/', '');
        document.body.style.setProperty('--bg-page', this.rechercheCouleur().couleur);
    }
  
    determine: boolean = false;
nomPage: string;

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

toggleMenu(){
    this.determine = !this.determine ? true : false;
}

rechercheCouleur(){
    return this.tableauCouleurs.find((numero) => {
        return this.nomPage === numero.page;
    });
}

fermeMenu(page: string){
    this.determine = false;
    this.nomPage = page;
    document.body.style.setProperty('--bg-page', this.rechercheCouleur().couleur);
}
    
}
