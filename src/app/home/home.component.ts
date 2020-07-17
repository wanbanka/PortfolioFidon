import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

import {of, Observable, BehaviorSubject} from 'rxjs';

import {KonvaComponent} from 'ng2-konva';

declare const Konva: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private colors: ColorsServiceService) { 
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('').couleur);
      
  }
    
    index: number = 0;
    
    largeurFenetre: number = window.innerWidth;
    hauteurFenetre: number = window.innerHeight;
    
    @ViewChildren('rect') rects: QueryList<KonvaComponent>;
    
    configStage: Observable<any> = of({
        width: this.largeurFenetre,
        height: this.hauteurFenetre
    });

imagesRectangles: BehaviorSubject<any>[] = [];

paths: string[] = ["assets/oeuvre.jpg", "assets/oeuvre2.jpg", "assets/oeuvre3.jpg", "assets/oeuvre4.jpg"];
    
    randomNumber(min: number, max: number): number{
        return Math.random() * (max - min) + min;
    }
    
    addTween(rectangle){
        
        let tween = new Konva.Tween({
           node: rectangle.getStage(),
            duration: 2,
            x: this.randomNumber(20, this.largeurFenetre - 200),
             y: this.randomNumber(this.hauteurFenetre / 2, this.hauteurFenetre - 200),
            opacity: 1,
            rotation: (Math.PI/180) * this.randomNumber(0, 360)
        });
        
        tween.play()
        
    }


  ngOnInit() {
      
      this.paths.forEach((path: string) => {
          
          let imagine = new Image();
          
let configRect: BehaviorSubject<any> = new BehaviorSubject({
   x: 220,
    y: 150,
    width: 0,
    height: 0,
    opacity: 0,
    fillPatternImage: null
});
          
          imagine.src = path; 
          
          imagine.onload = () => {
            configRect.next({
   x: this.randomNumber(20, this.largeurFenetre - 200),
    y: this.hauteurFenetre + 10,
    width: imagine.width,
    height: imagine.height,
    opacity: 0,
    fillPatternImage: imagine
});
              
              let vipRect = configRect;
      
      this.imagesRectangles = [...this.imagesRectangles, vipRect];
              
              console.table(this.imagesRectangles);
              
    this.rects.forEach((rectangle) => {
       this.addTween(rectangle); 
    });
      
      };
          
      });

  }

ngAfterViewInit(){
    
}

}
