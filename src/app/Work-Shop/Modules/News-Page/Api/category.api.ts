import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponseObject } from '../Model/categoryResponseObject.model';


@Injectable({
    providedIn : 'root'
})

export class CategoryApi {
    
    constructor(private http:HttpClient){
    }

    getNewsCategory():Observable<CategoryResponseObject>{
        return this.http.get<CategoryResponseObject>('https://api.npoint.io/c138bb84dc0b94ec5a18');
    }
    
    
   
    
  
}