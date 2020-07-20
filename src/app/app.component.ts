import { Component } from '@angular/core';

import {Location} from '@angular/common';

import {ColorsServiceService} from './Services/colors-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
    
    constructor(private location: Location, private colors: ColorsServiceService){
        this.nomPage = this.location.path().replace('/', '');
        this.nomPage === 'home' ? this.nomPage = this.nomPage.replace('home', '') : this.nomPage = this.nomPage;
        console.log(this.nomPage);
    }
    
    pathsMenu: string[] = [
      "M419 831 c-25 -25 -29 -37 -29 -81 0 -44 4 -56 29 -81 25 -25 37 -29 81 -29 44 0 56 4 81 29 25 25 29 37 29 81 0 44 -4 56 -29 81 -25 25 -37 29 -81 29 -44 0 -56 -4 -81 -29z",
    "M419 581 c-25 -25 -29 -37 -29 -81 0 -44 4 -56 29 -81 25 -25 37 -29 81 -29 44 0 56 4 81 29 25 25 29 37 29 81 0 74 -36 110 -110 110 -44 0 -56 -4 -81 -29z",
        "M419 331 c-25 -25 -29 -37 -29 -81 0 -44 4 -56 29 -81 25 -25 37 -29 81 -29 44 0 56 4 81 29 25 25 29 37 29 81 0 74 -36 110 -110 110 -44 0 -56 -4 -81 -29z"
    ];
  
    determine: boolean = false;
nomPage: string;

comeback: boolean = false;

afficheBack(event){
    
    if(event.route){
        
    this.comeback = true;
    this.nomPage = '';
    
    }
}

notePage(event){
    this.determine = false;
    this.nomPage = this.location.path().replace('/', '');
    this.nomPage === 'home' ? this.nomPage = this.nomPage.replace('home', '') : this.nomPage = this.nomPage;
}

backWorks(){
    this.location.back();
    this.comeback = false;
}

toggleMenu(){
    this.determine = !this.determine ? true : false;
}
    
}
