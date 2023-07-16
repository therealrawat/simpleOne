import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainComponent } from './train/train.component';
import { MealComponent } from './meal/meal.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: 'train',
  component: TrainComponent
},
{
  path: 'meal',
  component: MealComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
