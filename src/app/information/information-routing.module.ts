import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationAboutComponent } from './information-about/information-about.component';
import { InformationDeliveryComponent } from './information-delivery/information-delivery.component';
import { InformationTermsComponent } from './information-terms/information-terms.component';

const routes: Routes = [
  { path: 'about',component:InformationAboutComponent},
  { path: 'delivery', component:InformationDeliveryComponent },
  { path: 'terms', component:InformationTermsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
