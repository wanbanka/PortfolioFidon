import { Component } from '@angular/core';

import {Location} from '@angular/common';

import {ColorsServiceService} from './Services/colors-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    constructor(private location: Location, private colors: ColorsServiceService){
        this.nomPage = this.location.path().replace('/', '');
        console.log(this.nomPage);
    }
  
    determine: boolean = false;
nomPage: string;



toggleMenu(){
    this.determine = !this.determine ? true : false;
}

fermeMenu(page: string){
    this.determine = false;
    this.nomPage = page;
}
    
}
