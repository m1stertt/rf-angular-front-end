import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageHandlingService } from 'src/app/errorHandling/shared/message-handling.service';
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
  constructor(private config: DynamicDialogConfig,private imagesService:ImagesService,private messageHandlingService:MessageHandlingService, private configurationService: ConfigurationService,private ref:DynamicDialogRef) {
    this.serverUrl = configurationService.getServerUrl();
  }

  ngOnInit(): void {
    this.image=this.config.data.image;
    console.log(this.image);
  }

  delete(){
    if(this.image==undefined) return;
    this.imagesService.delete(this.image.id).subscribe(
      res=>{
        this.messageHandlingService.success("Billedet er nu slettet.");
        this.ref.close();
      },
      error=>this.messageHandlingService.error(error.statusText));
  }

  update(){
    if(this.image==undefined) return;
    this.imagesService.update(this.image).subscribe(
      res=>this.messageHandlingService.success("Billedet er nu opdateret."),
      error=>this.messageHandlingService.error(error.statusText));
  }

}
