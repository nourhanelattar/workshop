import { Component, Input } from "@angular/core";
import { NewsApi } from "../../News-Page/Api/news.api";
import { News } from "../../News-Page/Model/news.model";


@Component({
    selector:'home-container-component',
    templateUrl:'./home-container.component.html',
    styleUrls:['./home-container.component.scss'],
})
export class HomeContainerComponent {

 newsList!: News[];

    constructor(private newsApi:NewsApi){}
  
    ngOnInit(){
       this.newsApi.getListOfNews().subscribe((res)=>{
           this.newsList = res.articles
       })
    }
}