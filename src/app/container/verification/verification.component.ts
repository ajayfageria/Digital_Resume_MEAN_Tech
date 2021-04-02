import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
   email:string='';
  constructor(private activatedRoute: ActivatedRoute) { 
    const email$=this.activatedRoute.queryParams.pipe(map(data=>data.email));
    email$.subscribe(data=>{
      this.email=data;
    });
  }

  ngOnInit(): void {
  }

}
