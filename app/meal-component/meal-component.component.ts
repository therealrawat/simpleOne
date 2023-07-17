import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ApiServicesService } from '../Service/api-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meal-component',
  templateUrl: './meal-component.component.html',
  styleUrls: ['./meal-component.component.css']
})
export class MealComponentComponent {


  selectedMeal!: any;
  mealOptions: any[] = [
    { foodName: 'Veg Thali', price: 10.99, description: 'Delicious Atta Pizza with cheesy crust and mix veggies toppings' },
    { foodName: 'Non Veg Thali', price: 125.45, description: 'Chicken Curry and Rice' },
  ];
  constructor(private dataService: DataService, private sevices: ApiServicesService, private toastr:ToastrService, private route : Router) {
    const savedData = this.dataService.getData();
    this.selectedMeal = savedData?.selectedMeal || '';

    console.warn("ye warn", this.selectedMeal);
    
  }



  submitMealComponent() {
    const dataFromHome = this.dataService.getData();
    const dataFromTrain = { boardingStation: this.dataService.getData().boardingStation };
    const dataFromMeal = { selectedMeal: this.selectedMeal }

    const postData = {
      // mobileNo: dataFromHome.mobileNo,
      // trainNo: dataFromHome.trainNo,
      // time: dataFromHome.time,
      // journeyDate:dataFromHome.journeyDate,
      ...dataFromHome,
      ...dataFromTrain,
      foodName: this.selectedMeal.foodName,
      price: this.selectedMeal.price,
      description: this.selectedMeal.description
    };

    console.log('Collected Data:', this.dataService.getData());

    if(postData){
      
      this.sevices.AddTrainAndFood(postData).subscribe((res: any) => {
        console.warn("subbmitted");
        this.toastr.success("Order Placed Successfully!","Success")
        this.route.navigate([''])
        this.dataService.clearData();
      })
    }
    else {
      this.toastr.error("Invalid data", "Error")
    }
    
  }

}
