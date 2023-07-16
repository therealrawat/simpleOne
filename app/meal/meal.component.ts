import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent {
  selectedMeal: any;
  mealOptions: any[] = [
    { name: 'Meal 1', price: 10, description: 'Description 1' },
    { name: 'Meal 2', price: 15, description: 'Description 2' },
    { name: 'Meal 3', price: 12, description: 'Description 3' }
  ];

  constructor(private dataService: DataService) {
    const savedData = this.dataService.getData();
    this.selectedMeal = savedData?.selectedMeal || '';
  }

  submitComponent3() {
    const data = { selectedMeal: this.selectedMeal };
    this.dataService.saveData(data);

    // Log the collected data to the console
    console.log('Collected Data:', this.dataService.getData());
  }
}
