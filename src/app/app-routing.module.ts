import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { UsersComponent } from './users/users.component';
import { BlogComponent } from './blog/blog.component';
import { NewblogComponent } from './newblog/newblog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { UpdateblogstatusComponent } from './updateblogstatus/updateblogstatus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'blog',
    component:BlogComponent
  },
  {
    path: 'updateblogstatus',
    component:UpdateblogstatusComponent
  },
  {
    path: 'newblog',
    component:NewblogComponent
  },
  {
    path: 'viewblog',
    component:ViewblogComponent
  },
  {
  path: 'register',
  component:RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
