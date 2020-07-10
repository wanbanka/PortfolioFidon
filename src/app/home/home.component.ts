import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

import {of, Observable} from 'rxjs';

import {KonvaComponent, Tween} from 'ng2-konva';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private colors: ColorsServiceService) { 
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('').couleur);
      
  }
    
    @ViewChild('stage', {static: false}) stage: KonvaComponent;
    @ViewChild('layer', {static: false}) layer: KonvaComponent;
    @ViewChild('image', {static: false}) image: KonvaComponent;
    
    configStage: Observable<any> = of({
        width: window.innerWidth,
        height: window.innerHeight
    });

configImage: EventEmitter<any> = new EventEmitter();

 imagine = new Image();

showImage(src: string){
      
      this.imagine.src = src;
      
      this.imagine.onload = () => {
          this.configImage.emit({
              x: 50,
              y: 50,
              image: this.imagine,
              width: 106,
              height: 118
          });
          
          const tween = new Konva.Tween({
       node: this.imagine,
        duration: 1,
        x: 140,
        y: 90,
        rotationDeg: 45,
        opacity: 1,
        scaleX: 1.5
    });
    
    setTimeout(() => {
       tween.play(); 
    }, 2000);
          
      }
}


  ngOnInit() {
      this.showImage("assets/oeuvre.jpg");
  }

ngAfterViewInit(){
    
}

}
