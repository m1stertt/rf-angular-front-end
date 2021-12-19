import {Component, OnInit} from '@angular/core';
import {ProductDto} from "src/app/products/shared/product.dto";
import {CategoryDto} from "src/app/categories/shared/category.dto";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ProductsService} from "src/app/products/shared/products.service";
import {CategoriesService} from 'src/app/categories/shared/categories.service';
import {FormControl} from '@angular/forms';
import {ColorDto} from 'src/app/colors/shared/color.dto';
import {SizeDto} from 'src/app/sizes/shared/size.dto';
import {SizesService} from 'src/app/sizes/shared/sizes.service';
import {ColorsService} from 'src/app/colors/shared/colors.service';
import {CartService} from 'src/app/cart/shared/cart.service';
import {MenuService} from 'src/app/menu/shared/menu.service';
import {DialogService} from 'primeng/dynamicdialog';
import {AdminSizeCreateComponent} from '../../admin-sizes/admin-size-create/admin-size-create.component';
import {AdminColorCreateComponent} from '../../admin-colors/admin-color-create/admin-color-create.component';
import {ConfigurationService} from "../../../configuration.service";

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit {

  product?: ProductDto;
  categories: CategoryDto[] = [];
  categories_ = new FormControl();
  colors: ColorDto[] = [];
  colors_ = new FormControl();
  sizes: SizeDto[] = [];
  sizes_ = new FormControl();
  text: string = "";
  serverUrl: string;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private categoriesService: CategoriesService,
              private sizesService: SizesService,
              private colorsService: ColorsService,
              private menuService: MenuService,
              private dialogService: DialogService,
              private configurationService: ConfigurationService) {
    this.serverUrl = this.configurationService.getServerUrl();
  }

  editoropts: string[] = ['bold', 'italic', 'underline', 'strike', 'link', 'size', 'underline', 'script', 'font'];

  ngOnInit(): void {
    this.getProduct();
    this.getCategories();
    this.getColors();
    this.getSizes();
    this.menuService.breadcrumb = [
      {icon: 'pi pi-home', routerLink: "/"},
      {label: 'Admin Panel', routerLink: "/admin"},
      {
        label: 'Editing product id ' + Number(this.route.snapshot.paramMap.get('id')),
        routerLink: "/admin/products/" + Number(this.route.snapshot.paramMap.get('id'))
      }
    ];
  }

  createSize() {
    const ref = this.dialogService.open(AdminSizeCreateComponent, {
      header: 'Ny størrelse',
      width: '70%'
    });
  }

  createColor(product: ProductDto) {
    const ref = this.dialogService.open(AdminColorCreateComponent, {
      data: {
        product: product
      },
      header: 'Ny farve',
      width: '240px'
    });
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        console.log(product);
      });
  }

  getCategories(): void {
    this.categoriesService.getAll()
      .subscribe(product => this.categories = product);
  }

  getColors(): void {
    this.colorsService.getAll()
      .subscribe(product => this.colors = product);
  }

  getSizes(): void {
    this.sizesService.getAll()
      .subscribe(product => this.sizes = product);
  }

  goBack(): void {
    this.location.back();
  }

  update() {
    if (this.product) {
      this.productsService.updateProduct(this.product).subscribe(() => {
          //this.location.back();
        },
        error => {
          console.log(error)
        });
    }
  }

  compareWithFunc(a: CategoryDto, b: CategoryDto) {
    return a.id === b.id;
  }

}
