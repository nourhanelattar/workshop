import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../Model/news.model';
import { ResponseObject } from '../Model/ResponseObject.model';


@Injectable({
    providedIn : 'root'
})

export class NewsApi {
    
    constructor(private http:HttpClient){
    }

    getListOfNews():Observable<ResponseObject>{
        return this.http.get<ResponseObject>('https://api.npoint.io/e2534d5412765bf36702');
    }

  
}