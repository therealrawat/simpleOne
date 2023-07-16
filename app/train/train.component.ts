import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent {
  boardingStation: string;
  boardingStations: string[] = ['Station 1', 'Station 2', 'Station 3'];

  constructor(private router: Router, private dataService: DataService) {
    const savedData = this.dataService.getData();
    this.boardingStation = savedData?.boardingStation || '';
  }

  submitComponent2() {
    this.dataService.saveData({ boardingStation: this.boardingStation });
    this.router.navigate(['/meal']);
  }

}
