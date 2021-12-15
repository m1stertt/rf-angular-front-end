import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { CartService } from '../shared/cart.service';
import {Profile} from 'src/app/auth/shared/models/profile';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-cart-delivery',
  templateUrl: './cart-delivery.component.html',
  styleUrls: ['./cart-delivery.component.scss']
})
export class CartDeliveryComponent implements OnInit {

  steps=[
    {label: 'Kurv',routerLink:"/cart"},
    {label: 'Levering'},
    {label: 'Bekræftelse'}
  ];
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});

  addressData=this.cartService.userData;
  loggedIn:Profile | undefined =this.authService.getProfile();

  constructor(private _formBuilder: FormBuilder,private cartService:CartService,public appComponent:AppComponent,private authService:AuthService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  saveData():void{

  }

  userManagementForm = new FormGroup({

    firstName: new FormControl('',
      []),
    lastName: new FormControl('', []),
    email: new FormControl('', []),
    streetAndNumber: new FormControl('', []),
    postalCode: new FormControl('', []),
    city: new FormControl('', []),
    phoneNumber: new FormControl('', []),

  });

}
