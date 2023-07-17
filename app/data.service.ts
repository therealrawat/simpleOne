import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any = {}; 

  saveData(data: any) {
    this.data = { ...this.data, ...data }; 
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = {}; 
  }
}
