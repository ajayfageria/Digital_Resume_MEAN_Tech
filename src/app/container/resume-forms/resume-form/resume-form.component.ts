import { Component, Input, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
 @Input() resume!: Resume;
  constructor() { }

  ngOnInit(): void {
  }

}
