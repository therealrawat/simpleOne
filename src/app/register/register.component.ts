import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor (private builder:FormBuilder, private _snackBar : MatSnackBar, private services:AuthService, private router : Router, private toastr: ToastrService) {}

  registerForm = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required])),
    name: this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.required),
    password:this.builder.control('',[Validators.required]),
    role:this.builder.control(''),
    isactive:this.builder.control(true)
  });

  proceedRegistration()
  {
    if(this.registerForm.valid){
      this.services.ProceedRegister(this.registerForm.value).subscribe((res)=>{
        //this._snackBar.open('Registration Successfully', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
        this.toastr.success('Registration Successfully')
        this.router.navigate(['login']);
      })
    }
    else
    {
      //this._snackBar.open('Invalid Credentials', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
      this.toastr.error('Invalid Credentials.')
    }
  }
}
