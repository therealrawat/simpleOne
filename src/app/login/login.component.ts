import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private builder:FormBuilder, private _snackBar : MatSnackBar, private services:AuthService, private router : Router, private toastr: ToastrService) 
  {
    sessionStorage.clear();
  }

  userdata:any;

  loginForm = this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  })
  
  proceedLogin()
  {
    if(this.loginForm.valid){

      this.services.GetByCode(this.loginForm.value.username).subscribe(res =>
        {
          this.userdata = res;
          console.log(this.userdata);
          
          if(this.userdata.password === this.loginForm.value.password)
          {
            if(this.userdata.isactive){
              sessionStorage.setItem('username',this.userdata.id);
              sessionStorage.setItem('userrole',this.userdata.role);

              this.router.navigate(['']);
            }
            else{
              //this._snackBar.open('Inactive user', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
              this.toastr.error('Inactive User.')
            }
          }
          else
          {
            //this._snackBar.open('Invalid Credentials', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
            this.toastr.error('Invalid Credentials.')
          }
        })
    }
  }
}
