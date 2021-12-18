import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-product-images-upload',
  templateUrl: './admin-product-images-upload.component.html',
  styleUrls: ['./admin-product-images-upload.component.scss']
})
export class AdminProductImagesUploadComponent implements OnInit {

  public progress: number | undefined;
  public message: string | undefined;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  public uploadFile = (files: FileList|null) => {
    if(files==null||files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:5001/api/image', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){
          if(event.total){
            this.progress = Math.round(100 * event.loaded / event.total);
          }
        }else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }

}
