import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthUtils } from "../utility/auth-utils";
import { ApiService } from "./apiService";

@Injectable()
export class HttpService{
    private baseURL='http://localhost:5000/api';
    constructor(private httpClient: HttpClient){
        
    }
    get(url:string,paramData?:any):Observable<any>{//get
        const data={params:paramData,headers:this.getAuthHeaders()}
        return this.httpClient.get(this.baseURL+url,data);
    }
    post(url: string, body: any):Observable<any> {//post
           return this.httpClient.post(this.baseURL + url, body,{headers:this.getAuthHeaders()});
         }
    patch(url: string, body: any) :Observable<any>{//patch
           return this.httpClient.patch(this.baseURL+url,body,{headers:this.getAuthHeaders()});
    }
    private getAuthHeaders(){
        return {
            Authorization: `Bearer ${AuthUtils.getAuthToken()}`
        }
    }

    
}