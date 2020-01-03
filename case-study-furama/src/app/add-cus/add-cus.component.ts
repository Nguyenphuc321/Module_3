import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cus',
  templateUrl: './add-cus.component.html',
  styleUrls: ['./add-cus.component.css']
})
export class AddCusComponent implements OnInit {

  cusformlabel = 'Add Customer';
  cusformbtn = 'Save';

  constructor(private formBuilder: FormBuilder, private router: Router, private cusService: CustomerService) { }

  addForm: FormGroup;
  btnvisibility = true;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.maxLength(3)]],
      ngaysinh: ['', Validators.required,],
      address: ['', Validators.required],
    });

  }
  onSubmit() {
    console.log('Create fire');
      this.cusService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-cus']);
      },
      error => {
        alert(error);
      });
    }
  }
