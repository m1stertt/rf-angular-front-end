import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthInterceptor} from './auth/interceptors/auth.interceptor';
import {AuthService} from './auth/shared/auth.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MenuComponent} from './menu/menu.component';
import {CategoriesService} from './categories/shared/categories.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "@angular/cdk/layout";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {SizesService} from "./sizes/shared/sizes.service";
import {ColorsService} from "./colors/shared/colors.service";
import {getDanishPaginatorIntl} from "./danish-paginator-intl";
import {MatBadgeModule} from '@angular/material/badge';
import { CartService } from './cart/shared/cart.service';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { MenuService } from './menu/shared/menu.service';
import { HomepageComponent } from './homepage/homepage.component';
import {CarouselModule} from 'primeng/carousel';
import { ProductsModule } from './products/products.module';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { CartDeliveryComponent } from './cart/cart-delivery/cart-delivery.component';
import { CartConfirmComponent } from './cart/cart-confirm/cart-confirm.component';
import {MatStepperModule} from '@angular/material/stepper'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartViewComponent,
    HomepageComponent,
    CartDeliveryComponent,
    CartConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    BreadcrumbModule,
    TableModule,
    ButtonModule,
    RatingModule,
    CarouselModule,
    ProductsModule,
    MatStepperModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    , AuthService, AppComponent, MenuService, CategoriesService, SizesService, ColorsService, CartService, DialogService, MessageService,
    {provide: MatPaginatorIntl, useValue: getDanishPaginatorIntl()}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {
}
