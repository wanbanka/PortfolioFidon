import { Component, OnInit, OnDestroy } from '@angular/core';

import {ColorsServiceService} from '../Services/colors-service.service';

import {PortfolioService} from '../Services/portfolio.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private colors: ColorsServiceService, private formBuilder: FormBuilder, private portfolio: PortfolioService) {
  
      document.body.style.setProperty('--bg-page', this.colors.rechercheCouleur('contact').couleur);
      
  }
    
    formGroup: FormGroup;
    submitted: boolean = false;
    
    success: boolean = false;

  ngOnInit() {
      this.initForm();
  }
    
    initForm(){
        this.formGroup = this.formBuilder.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            mail: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        });
    }
    
    get nom(){
        return this.formGroup.controls['nom'];
    }
    
    get prenom(){
        return this.formGroup.controls['prenom'];
    }
    
    get mail(){
        return this.formGroup.controls['mail'];
    }
    
    get message(){
        return this.formGroup.controls['message'];
    }
    
    sendMail(){
        this.submitted = true;
        
        if(this.formGroup.invalid){
            return;
        }
        
        this.portfolio.envoiMail(this.formGroup.value).then(() => {
           console.log('Envoyé'); 
            this.success = true;
            
            setTimeout(() => {
                this.success = false;
            }, 3500);
            
        }).catch((error) => {
            console.log(error);
        });
        
    }
    
    ngOnDestroy(){
        this.formGroup = null;
    }

}
