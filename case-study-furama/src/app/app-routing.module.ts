import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListCusComponent } from './list-cus/list-cus.component';
import { AddCusComponent } from './add-cus/add-cus.component';
import { EditCusComponent } from './edit-cus/edit-cus.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { ListCtComponent } from './list-ct/list-ct.component';


const routes: Routes = [
  { path: '', component: ListCusComponent, pathMatch: 'full' },
  { path: 'list-cus', component: ListCusComponent },
  { path: 'add-cus', component: AddCusComponent },
  { path: 'update-cus', component: EditCusComponent },

  { path: '', component: ListEmpComponent, pathMatch: 'full' },
  { path: 'add-emp', component: AddCusComponent },
  { path: 'list-emp', component: ListCusComponent },
  { path: 'update-emp', component: EditCusComponent },

  { path: '', component: ListCtComponent, pathMatch: 'full' },
  { path: 'add-ct', component: AddCusComponent },
  { path: 'list-ct', component: ListCusComponent },
  { path: 'update-ct', component: EditCusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
