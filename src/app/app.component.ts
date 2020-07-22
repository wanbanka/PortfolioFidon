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
        this.callFunctionNavigation();
    }
  
    determine: boolean = false;
nomPage: string;

comeback: boolean = false;

start: any;

callFunctionNavigation(){
    if(this.comeback){
        this.start = () => {
            this.backWorks();
        };
    } else {
        this.start = () => {
            this.toggleMenu();
        };
    }
    
    console.log(this.start);
}

afficheBack(event){
    
    if(event.route){
        
    this.comeback = true;
    this.nomPage = '';
    
    }
    
    this.callFunctionNavigation();
}

notePage(event){
    this.determine = false;
    this.nomPage = this.location.path().replace('/', '');
    this.nomPage === 'home' ? this.nomPage = this.nomPage.replace('home', '') : this.nomPage = this.nomPage;
    this.callFunctionNavigation();
}

backWorks(){
    this.location.back();
    this.comeback = false;
    this.callFunctionNavigation();
}

toggleMenu(){
    this.determine = !this.determine ? true : false;
}
    
}
