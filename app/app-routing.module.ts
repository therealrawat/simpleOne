import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MealComponentComponent } from './meal-component/meal-component.component';
import { TrainComponentComponent } from './train-component/train-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'meal-component',
    component: MealComponentComponent
  },
  {
    path: 'train-component',
    component: TrainComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
