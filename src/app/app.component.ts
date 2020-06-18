import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    determine: boolean = false;

toggleMenu(){
    this.determine = !this.determine ? true : false;
}
    
}
