import { Component, OnInit } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private colors: ColorsServiceService) { 
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('').couleur);
      
  }

  ngOnInit() {
  }

}
