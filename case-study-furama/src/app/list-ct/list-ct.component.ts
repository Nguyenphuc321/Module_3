import { Component, OnInit } from '@angular/core';
import { ContractService } from '../service/contract.service';
import { Router } from '@angular/router';
import { Contract } from '../model/contract.model';

@Component({
  selector: 'app-list-ct',
  templateUrl: './list-ct.component.html',
  styleUrls: ['./list-ct.component.css']
})
export class ListCtComponent implements OnInit {


  contracts: Contract[];

  constructor(private ctService: ContractService, private router: Router,) { }

  ngOnInit() {
    this.ctService.getContract()
    .subscribe((data: Contract[]) => {
      this.contracts = data;
      console.log(this.contracts)
    });
  }
  deleteCt(contract: Contract): void {
    this.ctService.deleteContract(contract.id)
      .subscribe(data => {
        this.contracts = this.contracts.filter(u => u !== contract);
      });
  }
  editCt(contract: Contract): void {
    localStorage.removeItem('editCtId');
    localStorage.setItem('editCtId', contract.id.toString());
    this.router.navigate(['update-ct']);
  }
  addEmp(): void {
    localStorage.removeItem('editCtId');
    this.router.navigate(['add-ct']);
  }

}
