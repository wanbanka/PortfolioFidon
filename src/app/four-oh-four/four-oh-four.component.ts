import { Component, OnInit } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

import {trigger, state, style, animate, transition, group, sequence} from '@angular/animations';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss'],
    animations: [
        
        trigger("revealCadre", [
            state('hidden', style({
                opacity: '0',
                transform: 'scale(0)'
            })),
            
            state('visible', style({
                opacity: '1',
                transform: 'scale(2)'
            })),
            
            transition('hidden => visible', [
                animate('0.5s ease-out')
            ]),
            
            transition('visible => hidden', [
                animate('0.5s ease-out')
            ])
        ]),
        
        trigger("animPinceau", [
            state('arriveePinceau', style({
                left: '35%',
                opacity: '1'
            })),
            
            state('departPinceau', style({
                left: '50%',
                opacity: '0'
            })),
            
            transition('arriveePinceau => departPinceau', [
                sequence([
            animate('0.3s', style({
                transform: 'rotate(0deg)'
            })),
            animate('0.3s', style({
                transform: 'rotate(-10deg)'
            })),
            animate('0.3s', style({
                transform: 'rotate(10deg)'
            })),
                    animate('0.5s ease-in')
        ])
        ]),
            transition('departPinceau => arriveePinceau', [
    animate('0.5s ease-in')
    ])
        
        ])
        
    ]
})
export class FourOhFourComponent implements OnInit {

  constructor(private colors: ColorsServiceService) { 
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('contact').couleur);
      
  }
    
    isVisible: boolean = false;
    
    animPinceau: boolean = false;

  ngOnInit() {
      
      setTimeout(() => {
          this.isVisible = true;
      }, 1000);
      
      setTimeout(() => {
          this.animPinceau = true;
      }, 2000);
      
      setTimeout(() => {
          this.animPinceau = false;
      }, 2700);
      
  }

}
