import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { MatStepperModule } from '@angular/material/stepper'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { TrainComponentComponent } from './train-component/train-component.component';
import { MealComponentComponent } from './meal-component/meal-component.component';
import { ToastrModule } from 'ngx-toastr';
import { NumberonlyDirective } from './numberonly.directive';
import { TimeformatDirective } from './timeformat.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainComponentComponent,
    MealComponentComponent,
    NumberonlyDirective,
    TimeformatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }), // ToastrModule added
    MatButtonModule, MatIconModule, MatPaginatorModule, MatFormFieldModule,
    MatSortModule, MatInputModule, MatSelectModule, MatToolbarModule, MatTableModule,
    HttpClientModule, ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule, MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule, MatCardModule, FormsModule, MatRadioModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
