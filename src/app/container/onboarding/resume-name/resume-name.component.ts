import { ApiService } from 'src/app/services/apiService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-name',
  templateUrl: './resume-name.component.html',
  styleUrls: ['./resume-name.component.css']
})
export class ResumeNameComponent implements OnInit {
  resumeForm!: FormGroup;
  @Input() isCompleted: Boolean = false;
  loading: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.resumeForm = new FormGroup({
      name: new FormControl(null,[Validators.required])
    });

  }
  createResume(){
    //save data using api
    this.loading = true;
    this.apiService.saveResume(this.resumeForm.value).subscribe(data=>{
      this.loading = false;
      this.isCompleted = true;
    },error=>{
      this.loading = false;
    });
    
  }

}
