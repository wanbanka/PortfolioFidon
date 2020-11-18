import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

import {trigger, state, style, animate, transition} from '@angular/animations';

import {ColorsServiceService} from '../Services/colors-service.service';

import {PortfolioService} from '../Services/portfolio.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
    animations: [
        
        trigger('switchMessage', [
           
           state('lost', style({
            transform: 'scale(0)',
            display: 'none'
        })),
        
        state('visible', style({
            transform: 'scale(1)',
            display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
        gridArea: 'ensemble',
    marginTop: '16.5vh',
    gridColumnGap: '3%'
        })),
        
        transition('visible => lost', [
            animate('1s ease-in')
        ]),
            
        transition('lost => visible', [
            animate('1s ease-in')
        ])
            
        ]),
        
        trigger('switchMessage2', [
            
            state('lost', style({
            transform: 'scale(0)',
            display: 'none'
        })),
        
        state('visible', style({
            transform: 'scale(1)',
            display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
        marginTop: '16.5vh',
        height: '50vh',
        gridArea: 'ensemble',
        
   
        gridTemplateRows: '30% 70%'
        })),
        
        transition('visible => lost', [
            animate('1s ease-in')
        ]),
            
        transition('lost => visible', [
            animate('1s ease-in')
        ])
            
        ])
    ]
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
            nom: ['', [Validators.required, Validators.minLength(2)]],
            prenom: ['', [Validators.required, Validators.minLength(2)]],
            mail: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.minLength(10)]]
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

        /**
         * @source https://stackblitz.com/edit/angular-form-trim
         */

         Object.keys(this.formGroup.controls).forEach((key) => {

            this.formGroup.get(key).setValue(this.formGroup.get(key).value.trim());

         });

         /**
          * Fin de la source
          */
        
        if(this.formGroup.invalid){
            return;
        }
        
        this.portfolio.envoiMail(this.formGroup.value).then((response) => {
           console.log(response); 
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
