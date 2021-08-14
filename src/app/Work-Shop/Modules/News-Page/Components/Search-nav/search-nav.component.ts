import { Component, Input } from "@angular/core";
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { CategoryApi } from "../../Api/category.api";
import { Categories } from "../../Model/category.model";

@Component({
    selector :'search-nav-component',
    templateUrl : './search-nav.component.html',
    styleUrls :['./search-nav.component.scss'],
    inputs :['newsList' , 'categoryList'],
    styles: [`
    .form-group.hidden {
      width: 0;
      margin: 0;
      border: none;
      padding: 0;
    }
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
  `],

})

export class SearchNavComponent {
    @Input() categoryList!: Categories[];

    hoveredDate: NgbDate | null = null;
    fromDate: NgbDate | null;
    toDate: NgbDate | null;
  
    constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private categoryApi : CategoryApi){
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
   
    ngOnInit(): void {
        this.categoryApi.getNewsCategory().subscribe((res) => {
            this.categoryList = res.sourceCategory;
        })
    }
}