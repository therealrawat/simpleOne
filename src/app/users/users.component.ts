import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private services: AuthService, private dialog:MatDialog) {
    this.loadUser();
  }
  userlist: any;
  dataSource: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  loadUser() {
    this.services.GetAll().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status', 'action'];

  UpdateUser(id: any) {

    const popup = this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data:{
        usercode:id
      }
    })
    popup.afterClosed().subscribe(res=>{
      
    this.loadUser();
    });
  }

  opendialog(){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
