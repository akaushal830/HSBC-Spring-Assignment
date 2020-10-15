import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  str:string = "I am abhishek, a software engineer at Hsbc. I like to play cricket and basketball";
  constructor() { 
    
  }

  ngOnInit() {
  }

}
