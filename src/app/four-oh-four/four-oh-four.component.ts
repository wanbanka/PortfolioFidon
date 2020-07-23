import { Component, OnInit } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']
})
export class FourOhFourComponent implements OnInit {

  constructor(private colors: ColorsServiceService) { 
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('contact').couleur);
      
  }

  ngOnInit() {
  }

}
