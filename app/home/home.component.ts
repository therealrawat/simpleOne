import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  phoneNumber!: string;
  name!: string;
  time!: string;
  date!: Date;

  constructor(private router: Router, private dataService: DataService) {}

  submitComponent1() {
    const data = {
      phoneNumber: this.phoneNumber,
      name: this.name,
      time: this.time,
      date: this.date
    };

    this.dataService.saveData(data);
    this.router.navigate(['/train']);
  }

}
