import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { SharedService } from '../shared.service';
/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule],
})
export class HomeComponent {
  constructor(readonly router: Router, private verify: SharedService){

  }

  loginForm= new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email, Validators.minLength(9) ]),
    passwordFormControl: new FormControl('', [Validators.required,Validators.minLength(8)]),
  })

  redirectToRegister(){
    this.router.navigateByUrl("/register");
  }

 

  loginButton(){
    if(this.verify.vreifyExist()){
      this.router.navigateByUrl("/mainPage/store");
    }else{
      alert("Create account!!!!");
    }
    
  }

}