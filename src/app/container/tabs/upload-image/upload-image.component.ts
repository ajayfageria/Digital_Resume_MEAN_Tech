import { ApiService } from 'src/app/services/apiService';
import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AlertService } from 'src/app/services/alertService';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit, AfterViewInit {
  isSelected: boolean=false;
  isUploaded: boolean=false;
  selectButtonIcon='add'
  loading: boolean = false;
  file!: File;
  MAX_IMAGE_SIZE = 2*1000*1000;
  url: string ='';
 @Input('resume')resume!: Resume;
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('previewImage') previewImage!: ElementRef;
  constructor(private alertService: AlertService, private apiService: ApiService) {
   
  }
  ngAfterViewInit(){
    this.init()
  }
  init(){
  console.log(this.resume);
    if(this.resume) {
      this.isUploaded = !!this.resume.image_url;
      if(this.isUploaded){
       this.isSelected = true;
       this.url = this.resume.image_url;
      }
    }
   
  }

  ngOnInit(): void {
  }
  fetchResume(){
   this.apiService.fetchAllResume().subscribe(data=>{
      const resume = data[0];
   })
  }
  onImageSelect(value: any){
    const file = value.target.files[0];
    this.file = file;
    if(this.file.size > this.MAX_IMAGE_SIZE) {
    return this.alertService.error('File size must be less then 2MB');
    }
    if(file.type === 'image/JPEG' || 'image/jpg' || 'image/png' || 'image/PNG' || 'image/JPG' || 'image/jpeg') {
      this.isSelected = true;
      this.selectButtonIcon = 'cached';
      this.previewImage.nativeElement.src = window.URL.createObjectURL(this.file);
    } else {
      return this.alertService.error('File must be of type jpeg/png/jpg')
    }
  }
  fileInputSelect(){
    this.fileInput.nativeElement.click();
  }
  save() {
    this.loading = true;
      this.apiService.saveOrUpdate(this.file,this.resume?._id).subscribe(data=>{
        this.loading = false;
        this.isUploaded = true;
        this.url = data.image_url;
        this.alertService.success("Image uploaded successfully!")
      },error=>{
        this.loading = false;
      })
    

  }
   delete() {
    this.loading = true;
  this.apiService.deleteImage(this.resume._id).subscribe(data=>{
    this.alertService.success('Image deleted successfully!');
    this.isUploaded= false;
    this.isSelected = false;
    this.loading = false;
    this.url = '';
  },error=>{
    this.loading = false;

  });
   }

}
