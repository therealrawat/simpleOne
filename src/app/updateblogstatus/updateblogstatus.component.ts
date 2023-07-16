import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updateblogstatus',
  templateUrl: './updateblogstatus.component.html',
  styleUrls: ['./updateblogstatus.component.css']
})
export class UpdateblogstatusComponent {
  constructor (private toastr:ToastrService ,private builder:FormBuilder, private _snackBar : MatSnackBar, private services:AuthService, private router : Router,
    @Inject(MAT_DIALOG_DATA) public data:any, private dialog:MatDialogRef<UpdatepopupComponent>) {

    }


  editdata:any;
  ngOnInit(): void {
    this.services.GetBlogStatus().subscribe(res=>{
      this.blogStatus=res;
    })
    if(this.data.usercode!=null && this.data.usercode!=''){
      this.services.GetBlogByCode(this.data.usercode).subscribe(res=>{
        this.editdata=res;
        this.blogFormUpdate.setValue({
          id: this.editdata.id,
          title: this.editdata.title,
          author: this.editdata.author,
          role: this.editdata.role,
          category: this.editdata.category,
          date: this.editdata.date,
          status: this.editdata.status,
          article: this.editdata.article
        })
      });
    }
  }

  blogStatus:any;

  blogFormUpdate = this.builder.group({
    
    title: this.builder.control(''),
    author:this.builder.control(''),
    role:this.builder.control(''),
    category:this.builder.control(''),
    date:this.builder.control(''),
    status:this.builder.control('',Validators.required),
    article:this.builder.control(''),
    id:this.builder.control('')
  });

  updateBlogStatus()
  {
    if(this.blogFormUpdate.valid){
      this.services.UpdateBlog(this.blogFormUpdate.value.id,this.blogFormUpdate.value).subscribe(res=>{
        // alert(this.blogFormUpdate.value.id)
        //this._snackBar.open('Updated Successfully', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
        this.toastr.success('updated successfully.')

        this.dialog.close();
      });
    }else{
      this.toastr.warning('Please verify Status')
      // this._snackBar.open('Please verify Status', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
     
    }
  }
}
