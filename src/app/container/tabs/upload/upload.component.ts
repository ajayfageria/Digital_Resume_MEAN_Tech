import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit,AfterViewInit {
  @Input() resume!: Resume;
  constructor(private elementRef: ElementRef) {
    
   }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
   
  }

}


