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
        console.log(this.nomPage);
    }
  
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
}

backWorks(){
    this.location.back();
    this.comeback = false;
}

toggleMenu(){
    this.determine = !this.determine ? true : false;
}
    
}
