import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements DoCheck {

  constructor(private services:AuthService,private _snackBar:MatSnackBar, private builder:FormBuilder, private toastr:ToastrService, private router:Router){
    console.warn(this.services.GetUserRole());
    
    console.warn(services.GetUserName());
    
  }
  
  blogdata:any
  isadmin = false;
  articleContent = '';
  currentDate = formatDate(new Date(), 'dd-MM-yyyy', 'en');
  authorname:any;
  temp:any;
  
  ngDoCheck(): void {
    // if(this.services.GetUserRole() == 'Admin')
    // {
    //   this.isadmin = true;
    // }
    // else
    // {
    //   this.isadmin = false;
    // }
    // this.authorname = this.services.GetUserName();
  }

  
  blogForm = this.builder.group({
    title:this.builder.control('',Validators.required),
    author:this.builder.control(''),
    role:this.builder.control(this.services.GetUserRole()),
    category:this.builder.control('',Validators.required),
    date:this.builder.control(this.currentDate),
    status:this.builder.control('Pending'),
    article:this.builder.control('', Validators.minLength(50))
  })

  submitBlog(data:any){
    if(this.blogForm.valid){
      this.services.CreateBlog(this.blogForm.value).subscribe((res)=>{
         this.toastr.success('Please contact admin for enable access','Blog Posted Successfully') 
        //this._snackBar.open('Blog Posted Successfully', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
     
        this.router.navigate(['']);
      })
    }
    else
    {
      //this._snackBar.open('Enter valid Data', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
      this.toastr.error('Enter valid Data') 
        
    }
  }

  GetAuthorName()
  {
    this.services.GetAll().subscribe(res=>{
      this.temp = res;
      console.warn(this.temp.author);
      
    })
  }
}
