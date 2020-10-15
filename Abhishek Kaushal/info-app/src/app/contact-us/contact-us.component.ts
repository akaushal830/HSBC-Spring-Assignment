import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  phone:string = "Contact no. - +91-9464516562";
  email:string = "Email - akaushal830@gmail.com";;
  constructor() { }

  ngOnInit() {
  }

}
