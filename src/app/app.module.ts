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
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "@angular/cdk/layout";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
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
import {StepsModule} from 'primeng/steps';
import { MenuService } from './menu/shared/menu.service';
import { HomepageComponent } from './homepage/homepage.component';
import {CarouselModule} from 'primeng/carousel';
import { ProductsModule } from './products/products.module';
import { DialogService } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartViewComponent,
    HomepageComponent,
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
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    BreadcrumbModule,
    TableModule,
    ButtonModule,
    RatingModule,
    StepsModule,
    CarouselModule,
    ProductsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    , AuthService, AppComponent, MenuService, CategoriesService, SizesService, ColorsService, CartService, DialogService,
    {provide: MatPaginatorIntl, useValue: getDanishPaginatorIntl()}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {
}
