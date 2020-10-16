import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.css']
})
export class PropBindComponent {

  myimage:string;
  btnlabel:string;
  constructor() { 
    this.myimage="https://image.shutterstock.com/image-photo/planet-earth-elements-this-image-600w-248374732.jpg";
    this.btnlabel="Login";
  }

  ngOnInit() {
  }

}
