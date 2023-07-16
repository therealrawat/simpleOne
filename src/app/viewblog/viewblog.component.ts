import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
  blog: any;
  title:any;
  author:any;
  date:any;
  article:any;
  currentDate = formatDate(new Date(), 'dd-MM-yyyy', 'en');

  constructor (private builder:FormBuilder, private _snackBar : MatSnackBar, private services:AuthService, private router : Router,
    @Inject(MAT_DIALOG_DATA) public data:any, private dialog:MatDialogRef<ViewblogComponent>, private route:ActivatedRoute) {

    }
    ngOnInit(): void {
      if(this.data.usercode!=null && this.data.usercode!=''){
        this.services.GetBlogByCode(this.data.usercode).subscribe(res=>{
          this.blog=res;
          this.blogForm.setValue({
            title: this.blog.title,
            author: this.blog.author,
            role: this.blog.role,
            category: this.blog.category,
            date: this.blog.date,
            status: this.blog.status,
            article: this.blog.article
          })

          console.warn(this.blog);
          this.title = this.blog.title;
          this.author = this.blog.author;
          this.date = this.blog.date;
          this.article = this.blog.article;
          
        });
      }

    }
  
    // rolelist:any;
  
    blogForm = this.builder.group({
      title:this.builder.control(''),
      author:this.builder.control(''),
      role:this.builder.control(this.services.GetUserRole()),
      category:this.builder.control(''),
      date:this.builder.control(this.currentDate),
      status:this.builder.control('Pending'),
      article:this.builder.control('',)
    })
}
