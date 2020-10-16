import { Component, OnInit } from '@angular/core';
import { Module } from './Module1';
import { People } from './Module1';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people:any[]= [
    {"name":"Abhishek","age":"22","gender":"male"},
    {"name":"Abhinav","age":"22","gender":"male"},
    {"name":"Aditi","age":"22","gender":"female"},
  ];

  module = new Module();
  people1 = this.getPeople();
  constructor() { }

  getPeople()
  {
    return this.module.people1;
  }



  ngOnInit() {
  }

}
