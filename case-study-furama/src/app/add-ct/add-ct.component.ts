import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../service/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ct',
  templateUrl: './add-ct.component.html',
  styleUrls: ['./add-ct.component.css']
})
export class AddCtComponent implements OnInit {

  ctformlabel = 'Add Contract';
  ctformbtn = 'Save';

  constructor(private formBuilder: FormBuilder, private router: Router, private ctService:ContractService) { }

  addForm: FormGroup;
  btnvisibility = true;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      ngaylamhopdong: ['', Validators.required],
      ngayketthuc: ['', Validators.required],
      tiendaccoc: ['', Validators.required],
      tongtien: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log('Create fire');
    this.ctService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-ct']);
      },
      error => {
        alert(error);
      });
  }

}
