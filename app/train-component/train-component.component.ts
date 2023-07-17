import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-train-component',
  templateUrl: './train-component.component.html',
  styleUrls: ['./train-component.component.css']
})
export class TrainComponentComponent implements OnInit {

  trainNo!: string;
  time!: string;
  journeyDate!: Date;

  boardingStation: string;
  boardingStations: string[] = ['Dehradun', 'Haridwar', 'Delhi'];

  constructor(private router: Router, private dataService: DataService) {
    const savedData = this.dataService.getData();
    this.boardingStation = savedData?.boardingStation || '';
  }
  ngOnInit(): void {
    this.dataService.getData();
    // this.trainNo = this.dataService.
  }

  submitMealComponent() {
    this.dataService.saveData({ boardingStation: this.boardingStation });
    this.router.navigate(['/meal-component']);
  }

}
