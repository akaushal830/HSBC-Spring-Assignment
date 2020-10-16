import { Component, OnInit } from '@angular/core';
import { EmpList } from './Model';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {
  model = new EmpList();
  employees = this.getEmps();
  li:boolean=false;
  tb:boolean=false;

  getLi()
  {
    return this.li;
  }

  getTb()
  {
    return this.tb;
  }
  
  getEmps()
  {
    return this.model.employees;
  }

  dispList()
  {
    this.li=true;
    this.tb=false;
  }

  dispTable()
  {
    this.li=false;
    this.tb=true;
  }

  clear()
  {
    this.li=false;
    this.tb=false;
  }
  constructor() { }

  ngOnInit() {
  }

}
