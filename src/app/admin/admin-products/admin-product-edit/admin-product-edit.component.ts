import {Component, OnInit} from '@angular/core';
import {ProductDto} from "src/app/products/shared/product.dto";
import {CategoryDto} from "src/app/categories/shared/category.dto";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ProductsService} from "src/app/products/shared/products.service";
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { FormControl } from '@angular/forms';
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { SizeDto } from 'src/app/sizes/shared/size.dto';
import { SizesService } from 'src/app/sizes/shared/sizes.service';
import { ColorsService } from 'src/app/colors/shared/colors.service';
import { MenuService } from 'src/app/menu/shared/menu.service';
import {DialogService} from 'primeng/dynamicdialog';
import { AdminSizeCreateComponent } from '../../admin-sizes/admin-size-create/admin-size-create.component';
import { AdminColorCreateComponent } from '../../admin-colors/admin-color-create/admin-color-create.component';
import { InventoryStocksService } from 'src/app/products/shared/inventory-stocks.service';
import { MessageHandlingService } from 'src/app/errorHandling/shared/message-handling.service';
import { AdminProductInventoryStockCreateComponent } from '../admin-product-inventory-stock-create/admin-product-inventory-stock-create.component';
import { ImageDto } from 'src/app/images/shared/image.dto';
import { AdminProductImagesUploadComponent } from '../admin-product-images-upload/admin-product-images-upload.component';
import { AdminProductImagesEditComponent } from '../admin-product-images-edit/admin-product-images-edit.component';
import { ImagesService } from 'src/app/images/shared/images.service';

import {ConfigurationService} from "../../../configuration.service";
import { InventoryStockDto } from 'src/app/products/shared/inventoryStock.dto';
@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit {

  product?: ProductDto;
  categories: CategoryDto[]=[];
  categories_=new FormControl();
  colors: ColorDto[]=[];
  colors_=new FormControl();
  sizes: SizeDto[]=[];
  sizes_=new FormControl();
  text: string="";
  serverUrl: string;
  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              public location: Location,
              private categoriesService: CategoriesService,
              private sizesService: SizesService,
              private colorsService: ColorsService,
              private menuService:MenuService,
              private dialogService:DialogService,
              private inventoryStockService:InventoryStocksService,
              private messageHandlingService:MessageHandlingService,
              private imagesService:ImagesService,
              private configurationService: ConfigurationService) {
    this.serverUrl = this.configurationService.getServerUrl();
  }
  editoropts:string[]=['bold', 'italic', 'underline', 'strike','link','size','underline','script','font'];
  ngOnInit(): void {
    this.getProduct();
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Admin Panel',routerLink:"/admin"},
      {label:'Redigerer produkt id '+Number(this.route.snapshot.paramMap.get('id')),routerLink:"/admin/products/"+Number(this.route.snapshot.paramMap.get('id'))}
    ];
  }

  createSize(){
    let ref=this.dialogService.open(AdminSizeCreateComponent,{ header: 'Ny størrelse', width: '70%' });
    ref.onClose.subscribe(res=>this.getSizes());
  }

  createColor(product:ProductDto){
    let ref=this.dialogService.open(AdminColorCreateComponent,{ data:{ product:product }, header: 'Ny farve', width: '240px' });
    ref.onClose.subscribe(res=>this.getColors());
  }

  createInventoryStock(){
    let ref=this.dialogService.open(AdminProductInventoryStockCreateComponent,{ data:{ product:this.product }, header: 'Ny lager...', width: '240px' });
    ref.onClose.subscribe(res=>{
    });
  }

  createImage(){
    let ref=this.dialogService.open(AdminProductImagesUploadComponent,{ data:{ product:this.product }, header: 'Nyt billede', width: '240px' });
    ref.onClose.subscribe(res=>this.getImages());
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(id)
      .subscribe(product =>{
        this.product = product;
        this.getCategories();
        this.getColors();
        this.getSizes();
        this.inventoryStockService.getByProductID(id).subscribe(res=>{
          if(!this.product) return;
          console.log(res);
          this.product.inventoryStocks=res;
        },(error)=>{
          if(!error.error) return;
          this.messageHandlingService.error(error.statusText)
        });
      },error=>this.messageHandlingService.error(error.statusText));
  }

  getImages(){
    this.imagesService.getByProductID(Number(this.route.snapshot.paramMap.get('id'))).subscribe(images=>{
      console.log(images);
      if(this.product){
        this.product.images=images;
      }
    });
  }

  getCategories(): void {
    this.categoriesService.getAll()
      .subscribe(product => this.categories = product);
  }

  getColors(): void {
    this.colorsService.getAll()
      .subscribe(colors => this.colors = colors);
  }
  getSizes(): void {
    this.sizesService.getAll()
      .subscribe(product => this.sizes = product);
  }

  deleteInventoryStock(invStock:InventoryStockDto){
    this.inventoryStockService.delete(invStock.id);
  }

  update() {
    if (!this.product) return this.messageHandlingService.error("Der er et problem med at indhente produktet.");
    if(!this.product.productName.length) return this.messageHandlingService.error("Produktet skal have et navn");
    if(this.product.productDiscountPrice<0) return;
    if(this.product.productPrice<0) return this.messageHandlingService.error("Produktet skal have en pris");
    if(this.product.productDiscountPrice>this.product.productPrice) return this.messageHandlingService.error("Tilbuds pris skal være mindre end den normale pris.");
    this.productsService.updateProduct(this.product).subscribe(
      (product) =>this.messageHandlingService.success("Opdateret produktet, id: "+product.id),
      error=>this.messageHandlingService.error(error.statusText));
  }

  editImage(image:ImageDto){
    let ref=this.dialogService.open(AdminProductImagesEditComponent,{ data:{ image:image }, header: 'Rediger billede', width: '480px' });
    ref.onClose.subscribe(r=>{
      this.getImages();
    });
  }
  compareWithFunc(a: CategoryDto, b:CategoryDto) { return a.id === b.id; }
}
