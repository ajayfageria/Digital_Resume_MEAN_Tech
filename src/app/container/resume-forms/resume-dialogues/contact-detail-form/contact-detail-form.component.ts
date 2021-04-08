import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-contact-detail-form',
  templateUrl: './contact-detail-form.component.html',
  styleUrls: ['./contact-detail-form.component.css']
})
export class ContactDetailFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ContactDetailFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Resume) { 
      console.log(this.data);
    }

  ngOnInit(): void {
  }

}
