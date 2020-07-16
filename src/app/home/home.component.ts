import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

import {of, Observable, BehaviorSubject} from 'rxjs';

import {KonvaComponent} from 'ng2-konva';

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

configRect = new BehaviorSubject({
   x: 220,
    y: 150,
    width: 0,
    height: 0,
    fillPatternImage: null
});

imagine = new Image();


  ngOnInit() {
      this.imagine.src = "assets/oeuvre.jpg";
    
    this.imagine.onload = () => {
        this.configRect.next({
   x: 220,
    y: 150,
    width: this.imagine.width,
    height: this.imagine.height,
    fillPatternImage: this.imagine
});
    };
  }

ngAfterViewInit(){
    
    const anim = new Konva.Animation((frame: any) => {
       this.image.getStage().rotate(frame.time * 2 * Math.PI); 
    }, this.layer.getStage());
    
}

}
