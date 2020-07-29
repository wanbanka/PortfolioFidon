import { Component, OnInit } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

import {trigger, keyframes, state, style, animate, transition, group, sequence} from '@angular/animations';

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
            ])
        ]),
        
        trigger("animPinceau", [
            state('arriveePinceau', style({
                left: '30%',
                opacity: '1'
            })),
            
            state('departPinceau', style({
                left: '50%',
                opacity: '0'
            })),
            
            transition('arriveePinceau => departPinceau', [
                sequence([
                    
            animate('0.9s', keyframes([
                style({
                transform: 'rotate(0deg)'
                }),
                    style({
                        left: '35%',
                transform: 'rotate(-10deg)'
            }),
                style({
                    left: '42.5%',
                transform: 'rotate(10deg)'
            }),
                style({
                    left: '50%',
                    transform: 'rotate(0deg)'
                })
            ])),
                    
                    animate('0.5s ease-in')
        ])
        ]),
            transition('departPinceau => arriveePinceau', [
    animate('0.5s ease-in')
    ])
        
        ]), 
        
        trigger('revealLetter', [
            
            state('lostLetter', style({
                opacity: '0',
                transform: 'rotateY(180deg)'
            })),
            
            state('aliveLetter', style({
                opacity: '1'
            })),
            
            transition('lostLetter => aliveLetter', [
                    
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
    
    lettersStart: boolean[] = [false, false, false];

  ngOnInit() {
      
      let time = 1800;
      
      setTimeout(() => {
          this.isVisible = true;
      }, 500);
      
      setTimeout(() => {
          this.animPinceau = true;
      }, 1000);
      
      setTimeout(() => {
          this.animPinceau = false;
      }, 1700);
      
      setTimeout(() => {
          this.lettersStart[0] = true;
      }, 2000);
      
      setTimeout(() => {
          this.lettersStart[1] = true;
      }, 2050);
      
      setTimeout(() => {
          this.lettersStart[2] = true;
      }, 2100);
      
  }

}
