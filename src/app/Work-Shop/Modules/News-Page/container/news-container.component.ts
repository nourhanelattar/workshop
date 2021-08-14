import { Component } from "@angular/core";
import { NewsApi } from "../Api/news.api";
import { News } from "../Model/news.model";



@Component({
    selector:'news-container-component',
    templateUrl:'./news-container.component.html',
    styleUrls:['./news-container.component.scss']
})
export class NewsContainerComponent {

    newsList : News[] | undefined;

    constructor(private newsApi:NewsApi){}
  
    ngOnInit(){
        this.newsApi.getListOfNews().subscribe((res)=>{
            this.newsList = res.articles;
        })
    }
       
   

}