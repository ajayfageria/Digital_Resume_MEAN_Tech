import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Users } from "../models/users";
import { HttpService } from "./httpService";

@Injectable()
export class ApiService{
    private readonly authToken='auth token';
constructor(private httpService:HttpService){

}
loginandsettoken(data:{email:string,password:string}):Observable<Users>{
   return this.httpService.get('/user/login',data).pipe(map(res=>{
       this.setAuthToken(res.token);
       return res;
   }));
}

getAuthToken(){
    return localStorage.getItem(this.authToken)

}
setAuthToken(value:any){
    localStorage.setItem(this.authToken,value);

}
removeToken(){
    localStorage.removeItem(this.authToken);
}

signup(data:{
    email:string,password:string,confirm_password:string,
    name:string,job_category: string, experience_level: string
}):Observable<Users>{
    return this.httpService.post('/user/signup',data)
}
sendPasswordResetEmail(data:{email:string}):Observable<any>{
  return this.httpService.get('/user/reset/password/email',data);
}
resetPassword(data:{code:string,new_password:string,confirm_password:string}):Observable<Users>{
    return this.httpService.patch('/user/reset/password', data)
}

}