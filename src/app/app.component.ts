import { Component, OnInit, HostListener } from '@angular/core';

import {Location} from '@angular/common';

import {Router} from '@angular/router';

import {ColorsServiceService} from './Services/colors-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

    @HostListener('window:popstate', ["$event"])
    onPopState(event) {
        

        if(this.router.url.match("/oeuvres\/d+/")) {
            this.backWorks();
        } else {
            this.determine = false;
            this.comeback = false;
        }

    }

    
    constructor(private location: Location, private colors: ColorsServiceService, private router: Router){
        this.startPage();
        
        console.log(this.lost);
    }
    
    ngOnInit(){
        
        this.startPage();
        console.log(this.lost);
        
    }
  
    determine: boolean = false;
nomPage: string;

comeback: boolean = false;

start: any;

lost: boolean = false;
    
listePages: string[] = ['', 'home', 'presentation', 'oeuvres', 'contact'];
    
    startPage(){
        
        this.nomPage = this.location.path().replace('/', '');
        this.nomPage === 'home' ? this.nomPage = this.nomPage.replace('home', '') : this.nomPage = this.nomPage;
        
        
        
        if(this.listePages.indexOf(this.nomPage) === -1){
            
            this.nomPage = this.nomPage.replace(this.nomPage, '');
            
            console.log(this.nomPage);
            
            this.lost = true;
            
        } else {
            
            this.nomPage = this.nomPage;
            this.lost = false;
        }
        
        console.log(this.nomPage);
        this.callFunctionNavigation();
        
    }

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
    this.lost = false;
    this.nomPage = '';
    
    }
    
    this.callFunctionNavigation();
}

notePage(event){
    this.determine = false;
    this.nomPage = this.location.path().replace('/', '');
    this.nomPage === 'home' ? this.nomPage = this.nomPage.replace('home', '') : this.nomPage = this.nomPage;
    this.callFunctionNavigation();
    
    if(this.router.url === '' || this.router.url === '/home'){
        
        this.lost = false;
        this.comeback = false;
        
    } else if(this.router.url === '/not-found'){
        
        this.nomPage = this.nomPage.replace('not-found', '');
        
        this.lost = true;
    }
}

backWorks(){
    this.router.navigateByUrl('/oeuvres');
    this.comeback = false;
    this.callFunctionNavigation();
}

toggleMenu(){
    this.determine = !this.determine ? true : false;
}
    
}
