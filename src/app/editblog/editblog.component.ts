import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {
  constructor(private builder: FormBuilder, private _snackBar: MatSnackBar, private services: AuthService, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<UpdatepopupComponent>, private toastr: ToastrService) {

  }


  editdata:any;
  currentDate = formatDate(new Date(), 'dd-MM-yyyy', 'en');

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
    
    title: this.builder.control('',Validators.required),
    author:this.builder.control('',Validators.required),
    role:this.builder.control(''),
    category:this.builder.control(''),
    date:this.builder.control(this.currentDate),
    status:this.builder.control(''),
    article:this.builder.control('',Validators.required),
    id:this.builder.control('')
  });

  updateBlog()
  {
    if(this.blogFormUpdate.valid){
      this.services.UpdateBlog(this.blogFormUpdate.value.id,this.blogFormUpdate.value).subscribe(res=>{
        // alert(this.blogFormUpdate.value.id)
        //this._snackBar.open('Status Updated Successfully', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
        this.toastr.success('Status Updated Successfully.')

        this.dialog.close();
      });
    }else{
      //this._snackBar.open('Please verify Status', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
      this.toastr.warning('Please verify Status')
    }
  }
}
