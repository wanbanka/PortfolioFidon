import { Component, OnInit, Input, HostBinding } from '@angular/core';

import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
    animations: [
        trigger('openMenu', [
            state('close', style({
                opacity: '0',
            })),
            
            state('visible', style({
                display: 'grid',
                opacity: '1'
                
            })),
            
            transition('visible => close', [
                animate('0.5s ease-in')
            ]),
            
            transition('close => visible', [
                animate('0.5s ease-in')
            ])
        ])
    ]
})
export class MenuComponent implements OnInit {

  constructor() { 
      
  }
    
    @Input() open : boolean;
    

  ngOnInit() {
  }

}
