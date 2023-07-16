import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any = {}; // Initialize the data object to store the collected information

  saveData(data: any) {
    this.data = { ...this.data, ...data }; // Merge new data with existing data
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = {}; // Clear the data when needed
  }
}
