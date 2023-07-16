import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  constructor (private builder:FormBuilder, private _snackBar : MatSnackBar, private services:AuthService, private router : Router,
    @Inject(MAT_DIALOG_DATA) public data:any, private dialog:MatDialogRef<UpdatepopupComponent>) {

    }


  editdata:any;
  ngOnInit(): void {
    this.services.GetAllRole().subscribe(res=>{
      this.rolelist=res;
    })
    if(this.data.usercode!=null && this.data.usercode!=''){
      this.services.GetByCode(this.data.usercode).subscribe(res=>{
        this.editdata=res;
        this.registerFormUpdate.setValue({
          id: this.editdata.id, name: this.editdata.name,
          email: this.editdata.email,
          password: this.editdata.password,
          role: this.editdata.role,
          isactive: this.editdata.isactive
        })
      });
    }
  }

  rolelist:any;

  registerFormUpdate = this.builder.group({
    id:this.builder.control(''),
    name: this.builder.control(''),
    email:this.builder.control(''),
    password:this.builder.control(''),
    role:this.builder.control('',Validators.required),
    isactive:this.builder.control(false)
  });

  updateUser()
  {
    if(this.registerFormUpdate.valid){
      this.services.UpdateUser(this.registerFormUpdate.value.id,this.registerFormUpdate.value).subscribe(res=>{
        this._snackBar.open('Updated Successfully', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
     
        this.dialog.close();
      });
    }else{
      this._snackBar.open('Plese select a role', "close", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
     
    }
  }

}
