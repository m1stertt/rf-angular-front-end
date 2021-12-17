import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { CartService } from '../shared/cart.service';
import {Profile} from 'src/app/auth/shared/models/profile';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { UserDto } from 'src/app/account/shared/user.dto';

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

  addressData=this.authService.getUser();
  loggedIn:Profile | undefined =this.authService.getProfile();

  constructor(private _formBuilder: FormBuilder,public cartService:CartService,public appComponent:AppComponent,private authService:AuthService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      //firstCtrl: ['', Validators.required],
    });
  }

  saveData():void{

  }

  saveInfo(){
    console.log(this.addressData.firstName);
    if(!this.userManagementForm.valid) return;
  }

  userManagementForm = new FormGroup({

    firstName: new FormControl('',
      [ Validators.required]),
    lastName: new FormControl('', [ Validators.required]),
    email: new FormControl('', [ Validators.required]),
    streetAndNumber: new FormControl('', [ Validators.required]),
    postalCode: new FormControl('', [ Validators.required,
      Validators.maxLength(4),Validators.minLength(4)]),
    city: new FormControl('', [ Validators.required]),
    phoneNumber: new FormControl('', [ Validators.required,
      Validators.maxLength(8),Validators.minLength(8)]),

  });

}
