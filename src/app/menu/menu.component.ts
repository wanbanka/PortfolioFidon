import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
    
    @Input() open : boolean;

    @Output() page = new EventEmitter<any>();
    

  ngOnInit() {
  }
    
    changePage(page: string){
        this.page.emit(page);
    }

}
