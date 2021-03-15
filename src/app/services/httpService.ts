import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpService{
    private baseURL='http://localhost:5000/api';
    constructor(private httpClient: HttpClient){
        
    }
    get(url:string,paramData?:any):Observable<any>{//get
        const data={params:paramData}
        return this.httpClient.get(this.baseURL+url,data);
    }
    post(url: string, body: any):Observable<any> {//post
           return this.httpClient.post(this.baseURL + url, body);
         }
    patch(url: string, body: any) :Observable<any>{//patch
           return this.httpClient.patch(this.baseURL+url,body);
    }
    
}