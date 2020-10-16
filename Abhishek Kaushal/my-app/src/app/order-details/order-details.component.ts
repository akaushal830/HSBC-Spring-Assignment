import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId:string;
  custName:string;
  billDate:Date;
  shipDate:Date;
  total:number;
  constructor() { }

  ngOnInit() {
  }

}
