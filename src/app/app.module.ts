import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { ToastrModule} from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { UsersComponent } from './users/users.component';
import { BlogComponent } from './blog/blog.component';
import { NewblogComponent } from './newblog/newblog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { UpdateblogstatusComponent } from './updateblogstatus/updateblogstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UpdatepopupComponent,
    UsersComponent,
    BlogComponent,
    NewblogComponent,
    ViewblogComponent,
    EditblogComponent,
    UpdateblogstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
