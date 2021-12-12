import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InformationDeliveryComponent } from './information-delivery/information-delivery.component';
import { InformationAboutComponent } from './information-about/information-about.component';
import { InformationTermsComponent } from './information-terms/information-terms.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    InformationDeliveryComponent,
    InformationAboutComponent,
    InformationTermsComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MatCardModule
  ]
})
export class InformationModule { }
