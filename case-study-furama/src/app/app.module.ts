import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasestudyFuramaComponent } from './casestudy-furama/casestudy-furama.component';
import { FormsModule } from '@angular/forms';
import { AddCusComponent } from './add-cus/add-cus.component';
import { ListCusComponent } from './list-cus/list-cus.component';
import { EditCusComponent } from './edit-cus/edit-cus.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddCtComponent } from './add-ct/add-ct.component';
import { EditCtComponent } from './edit-ct/edit-ct.component';
import { ListCtComponent } from './list-ct/list-ct.component';
@NgModule({
  declarations: [
    AppComponent,
    CasestudyFuramaComponent,
    AddCusComponent,
    ListCusComponent,
    EditCusComponent,
    AddEmpComponent,
    EditEmpComponent,
    ListEmpComponent,
    AddCtComponent,
    EditCtComponent,
    ListCtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
