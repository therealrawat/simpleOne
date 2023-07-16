import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { ViewblogComponent } from '../viewblog/viewblog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bloglist: any;

  constructor(private services: AuthService, private dialog:MatDialog, private toastr:ToastrService, private router:Router) {
    this.loadBlogs()
  }

  ViewBlog(id:any)
  {
    const popup = this.dialog.open(ViewblogComponent,{
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'500ms',
      width:'70%',
      // height: '80%',
      data:{
        usercode:id
      }
    })
    popup.afterClosed().subscribe(res=>{
      
    // this.loadBlogs();
    });
 
  }

  loadBlogs(){
    this.services.GetAllBlogs().subscribe(res => {
      
      this.bloglist = res
      this.bloglist = this.bloglist.filter((item: { status: string; }) => item.status === 'Published')
      .sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());;
      console.warn(this.bloglist);
      
    })
  }

  getLimitedWords(text: string, maxWords: number): string {
    const words = text.split(' ');
  
    if (words.length > maxWords) {
      const limitedWords = words.slice(0, maxWords);
      return limitedWords.join(' ') + '...';
    }
  
    return text;
  }

  goToBlog(id:any)
  {
    const popup = this.dialog.open(ViewblogComponent,{
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'500ms',
      width:'100%',
      height: '100%',
      data:{
        usercode:id
      }
    })
    popup.afterClosed().subscribe(res=>{
      
    this.loadBlogs();
    });
  }
}
