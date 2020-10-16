import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  //template: `<h2>This is a hello world component</h2>`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  empName:string="Abhishek";
  constructor() { }


}
