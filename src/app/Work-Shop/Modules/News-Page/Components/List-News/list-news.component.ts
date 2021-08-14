import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { News } from "../../Model/news.model";


@Component({
    selector : 'list-news-component',
    templateUrl : './list-news.component.html',
    styleUrls : ['./list-news.component.scss'],
})

export class ListNewsComponent {
    
    @Input() newsList: News[] | undefined; 

    page = 1;

    constructor() {}
  
    

    ngOnInit(){
    }
   
    

}







    