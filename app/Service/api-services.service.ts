import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient) { }

  AddTrainAndFood(data:any){
    return this.http.post('http://localhost:5239/api/User/AddTrainFood', data);
  }
}
