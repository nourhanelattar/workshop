import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsApi } from "../../../News-Page/Api/news.api";
import { News } from "../../../News-Page/Model/news.model";


@Component({
    selector : 'details-news-component',
    templateUrl : './details-card.component.html',
    styleUrls : ['./details-card.component.scss']

})
export class DetailsNewsComponent {

    newsList!: News[]; 
    oneNews : News | undefined
   
    constructor(private route:ActivatedRoute,private newsApi:NewsApi){}
 

    ngOnInit() {
        this.newsApi.getListOfNews().subscribe((res)=>{
            this.newsList = res.articles;

           const routeParams = this.route.snapshot.paramMap;
           const newsIdFromRoute = Number(routeParams.get('newsId'));
            
        //    console.log(this.newsList); 

           this.oneNews = this.newsList.find(oneNews => oneNews.id === newsIdFromRoute)
        })
      

    }
}