import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../service/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-ct',
  templateUrl: './edit-ct.component.html',
  styleUrls: ['./edit-ct.component.css']
})
export class EditCtComponent implements OnInit {

  ctformlabel = 'Edit Contract';
  ctformbtn = 'Update';

  constructor(private formBuilder: FormBuilder, private router: Router, private ctService: ContractService) { }

  editForm: FormGroup;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      ngaylamhopdong: ['', Validators.required],
      ngayketthuc: ['', Validators.required],
      tiendaccoc: ['', Validators.required],
      tongtien: ['', Validators.required],
      
    });

    const ctid = localStorage.getItem('editCtId');
    if (+ctid > 0) {
      this.ctService.getContractById(+ctid).subscribe(data => {
        this.editForm.patchValue(data);
      });
    }
  }
  onUpdate() {

    console.log('Update fire');
    this.ctService.updateContract(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-ct']);
    },
      error => {
        alert(error);
     });
  }

}
