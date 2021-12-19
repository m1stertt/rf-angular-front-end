import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ErrorHandlingMessageService } from 'src/app/errorHandling/shared/error-handling-message.service';
import { ImageDto } from 'src/app/images/shared/image.dto';
import { ImagesService } from 'src/app/images/shared/images.service';
import {ConfigurationService} from "../../../configuration.service";

@Component({
  selector: 'app-admin-product-images-edit',
  templateUrl: './admin-product-images-edit.component.html',
  styleUrls: ['./admin-product-images-edit.component.scss']
})
export class AdminProductImagesEditComponent implements OnInit {
  image:ImageDto|undefined;
  serverUrl: string;
  constructor(private config: DynamicDialogConfig,private imagesService:ImagesService,private errorHandlingMessageService:ErrorHandlingMessageService, private configurationService: ConfigurationService) {
    this.serverUrl = configurationService.getServerUrl();
  }

  ngOnInit(): void {
    this.image=this.config.data.image;
  }

  delete(){
    if(this.image==undefined) return;
    this.imagesService.delete(this.image.id).subscribe(
      res=>this.errorHandlingMessageService.success("Billedet er nu slettet."),
      error=>this.errorHandlingMessageService.error(error.statusText));
  }

  update(){
    if(this.image==undefined) return;
    this.imagesService.update(this.image).subscribe(
      res=>this.errorHandlingMessageService.success("Billedet er nu opdateret."),
      error=>this.errorHandlingMessageService.error(error.statusText));
  }

}
