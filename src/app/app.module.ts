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
import {MatPaginatorIntl} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {SizesService} from "./sizes/shared/sizes.service";
import {ColorsService} from "./colors/shared/colors.service";
import {getDanishPaginatorIntl} from "./danish-paginator-intl";
import {MatBadgeModule} from '@angular/material/badge';
import { CartService } from './cart/shared/cart.service';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import { MenuService } from './menu/shared/menu.service';
import { HomepageComponent } from './homepage/homepage.component';
import {CarouselModule} from 'primeng/carousel';
import { ProductsModule } from './products/products.module';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccountService } from './account/shared/account.service';
import { MessageHandlingService } from './messageHandling/shared/message-handling.service';
import { ToastModule } from 'primeng/toast';
import { InventoryStocksService } from './products/shared/inventory-stocks.service';
import { ImagesService } from './images/shared/images.service';
import {ConfigurationService} from "./configuration.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
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
    LayoutModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CarouselModule,
    ProductsModule,
    OverlayPanelModule,
    MatTooltipModule,
    ToastModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    , AuthService, AppComponent, MenuService, CategoriesService, SizesService, ColorsService, CartService, DialogService, MessageService,ConfirmationService,AccountService,MessageHandlingService,InventoryStocksService,ImagesService,  ConfigurationService,
    {provide: MatPaginatorIntl, useValue: getDanishPaginatorIntl()}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
