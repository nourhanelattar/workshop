import { Component, Input } from "@angular/core";
import { News } from "../../../News-Page/Model/news.model";


@Component({
    selector :' card-component',
    templateUrl : './card.component.html',
    styleUrls : ['./card.component.scss'],
    inputs : ['newList']
})

export class CardComponent {
    @Input() newList!: News[];

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}