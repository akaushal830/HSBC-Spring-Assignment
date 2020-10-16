import { a } from "@angular/core/src/render3";

export class Employee {
  empNo:number;
  empName:string;
  salary:number;
  desig:string;
  bonus:number;
  total:number

  constructor(empNo,empName,salary,desig) {
    this.empNo = empNo;
    this.empName = empName;
    this.salary = salary;
    this.desig = desig;
    this.bonus = 0.1*salary;
    this.total = 1.1*salary;
  }

  getEmpNo()
  {
    return this.empNo;
  }

  getEmpName()
  {
    return this.empName;
  }

  getSalary(){
    return this.salary;
  }

  getDesig()
  {
    return this.desig;
  }

  getBonus()
  {
    return this.bonus;
  }

  getTotal()
  {
    return this.total;
  }
  
}

export class EmpList {
 
  employees:Employee[];
  constructor() {
    this.employees=[new Employee("111","ABHISHEK",5000,"SE"),new Employee("222","ABHINAV",6000,"SSE"),new Employee("333","ADITI",9000,"SSE"),new Employee("444","KAUSHAL",10000,"SSE"),];
  }

  
}
