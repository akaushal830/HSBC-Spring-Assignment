import { a } from "@angular/core/src/render3";

export class People {
  name:string;
  age:number;
  gender:string;

  constructor(name:string , age:number, gender:string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getName()
  {
    return this.name;
  }

  getAge(){
    return this.age;
  }

  getGender(){
    return this.gender;
  }

  
}

export class Module {
 
  people1:People[];
  constructor() {
    this.people1=[new People("ABHISHEK",22,"MALE"),new People("ABHINAV",22,"MALE"),new People("ADITI",22,"FEMALE")];
  }

  
}
