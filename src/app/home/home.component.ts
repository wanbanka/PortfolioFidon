import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

import {of, Observable, BehaviorSubject} from 'rxjs';

import {KonvaComponent} from 'ng2-konva';

declare const Konva: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private colors: ColorsServiceService) { 
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('').couleur);
      
  }
    
    largeurFenetre: number = window.innerWidth;
    hauteurFenetre: number = window.innerHeight;
    
    @ViewChild('layer', {static: false}) layer: KonvaComponent;
    
    @ViewChildren('rect') rects: QueryList<KonvaComponent>;
    
    configStage: Observable<any> = of({
        width: this.largeurFenetre,
        height: this.hauteurFenetre
    });

imagesRectangles: any[] = [];

paths: string[] = ["assets/oeuvre.jpg", "assets/oeuvre2.jpg", "assets/oeuvre3.jpg", "assets/oeuvre4.jpg", "assets/oeuvre5.jpg", "assets/oeuvre6.jpg"];
    
    randomNumber(min: number, max: number): number{
        return Math.random() * (max - min) + min;
    }
    
    addTween(rectangle){
        
        let tween = new Konva.Tween({
           node: rectangle.getStage(),
            duration: 2,
            x: this.randomNumber(20, this.largeurFenetre - 200),
             y: this.randomNumber(this.hauteurFenetre / 4, this.hauteurFenetre - 200),
            opacity: 1,
            rotation: (Math.PI/180) * this.randomNumber(0, 360)
        });
        
        tween.play()
        
    }


  ngOnInit() {
      
      this.paths.forEach((path: string) => {
          
          let imagine = new Image();
          
let configRect: any;
          
          imagine.src = path; 
          
          imagine.onload = () => {
            configRect = new BehaviorSubject({
   x: this.randomNumber(20, this.largeurFenetre - 200),
    y: this.hauteurFenetre + 10,
    width: imagine.width,
    height: imagine.height,
    opacity: 0,
    draggable: true,
    fillPatternImage: imagine
});
              
    
      
      this.imagesRectangles = [...this.imagesRectangles, configRect];
              
              console.table(this.imagesRectangles);
              
    this.rects.forEach((rectangle) => {
       this.addTween(rectangle); 
    });
      
      };
          
      });

  }

}
