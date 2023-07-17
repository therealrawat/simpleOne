import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Mealoption } from '../mealoption';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mobileNo!: string;
  trainNo!: string;
  time!: string;
  journeyDate!: Date;

  constructor(private router: Router, private dataService: DataService) {}

  submitHomeComponent() {
    const data = {
      mobileNo: this.mobileNo,
      trainNo: this.trainNo,
      time: this.time,
      journeyDate: this.journeyDate
    };

    this.dataService.saveData(data);
    this.router.navigate(['/train-component']);
  }
}
