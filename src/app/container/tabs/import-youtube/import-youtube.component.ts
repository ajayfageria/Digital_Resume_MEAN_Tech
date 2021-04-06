import { ApiService } from 'src/app/services/apiService';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Resume } from 'src/app/models/resume';
import { AlertService } from 'src/app/services/alertService';

@Component({
  selector: 'app-import-youtube',
  templateUrl: './import-youtube.component.html',
  styleUrls: ['./import-youtube.component.css']
})
export class ImportYoutubeComponent implements OnInit,AfterViewInit {
  @Input() resume!: Resume;
  youtubeForm: FormGroup;
  loading = false;
  isVideoUploaded: boolean = false;
  uploadAgain: boolean = false;
  YOUTUBE_REGEX = '^((?:https?:)?\\/\\/)?((?:www|m)\\.)?((?:youtube\\.' +
    'com|youtu.be))(\\/(?:[\\w\\-]+\\?v=|embed\\/|v\\/)?)([\\w\\-]+)(\\S+)?$'
  constructor(private apiService: ApiService, private alertService: AlertService) {
    this.youtubeForm = new FormGroup({
      video_url : new FormControl(null,[Validators.required,Validators.pattern(this.YOUTUBE_REGEX)])
     });
   }
   ngAfterViewInit(){
     this.isVideoUploaded = !!this.resume.video_url;
   }

  ngOnInit(): void {
  }
  uploadVideo(){
    this.loading = true;
  throw this.apiService.addVideo(this.resume._id,this.youtubeForm.value).subscribe(data=>{
   this.loading = false;
   const message = this.isVideoUploaded ? 'Video Updated Successfully' : 'Video uploaded SuccessFully';
   this.isVideoUploaded = true;
   this.alertService.success(message);
  },error=>{
    this.loading = false;
  });
  }

}
