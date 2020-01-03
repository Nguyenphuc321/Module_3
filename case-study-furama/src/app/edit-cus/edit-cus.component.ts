import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-cus',
  templateUrl: './edit-cus.component.html',
  styleUrls: ['./edit-cus.component.css']
})
export class EditCusComponent implements OnInit {

  cusformlabel = 'Edit Customer';
  cusformbtn = 'Update';

  constructor(private formBuilder: FormBuilder, private router: Router, private cusService: CustomerService) { }

  editForm: FormGroup;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.maxLength(3)]],
      ngaysinh: ['', Validators.required],
      address: ['', Validators.required]
    });

    const cusid = localStorage.getItem('editCusId');
    if (+cusid > 0) {
      this.cusService.getCustomerById(+cusid).subscribe(data => {
        this.editForm.patchValue(data);
      });
    }
  }
  onUpdate() {

    console.log('Update fire');
    this.cusService.updateCustomer(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-cus']);
    },
      error => {
        alert(error);
      });
  }

}
