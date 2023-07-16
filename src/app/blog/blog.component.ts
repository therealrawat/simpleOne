import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { ViewblogComponent } from '../viewblog/viewblog.component';
import { EditblogComponent } from '../editblog/editblog.component';
import { UpdateblogstatusComponent } from '../updateblogstatus/updateblogstatus.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private services: AuthService, private dialog:MatDialog, private toastr:ToastrService, private router:Router) {
    this.loadBlogs();
  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  loadBlogs(){
    this.services.GetAllBlogs().subscribe(res => {
      this.bloglist = res;
      this.dataSource = new MatTableDataSource(this.bloglist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  displayedColumns: string[] = ['sno', 'title', 'author', 'category', 'date', 'status', 'action'];
  dataSource: any;
  bloglist:any;


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
      
    this.loadBlogs();
    });
    // this.router.navigate(['viewblog'], { queryParams: { id: id } });
    // alert(id)
 
  }
  UpdateBlog(code:any)
  {
    const popup = this.dialog.open(EditblogComponent,{
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'500ms',
      width:'70%',
      // height: '80%',
      data:{
        usercode:code
      }
    })
    popup.afterClosed().subscribe(res=>{
      
    this.loadBlogs();
    });
  }
  DeleteBlog(code:any)
  {
    this.services.DeleteBlog(code).subscribe(res=>{
     this.toastr.warning('Blog Deleted!')
     this.loadBlogs();
    })
  }
  FeaturedBlog(id:any)
  {
    const popup = this.dialog.open(UpdateblogstatusComponent,{
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'500ms',
      width:'70%',
      data:{
        usercode:id
      }
    })
    popup.afterClosed().subscribe(res=>{
      
    this.loadBlogs();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
