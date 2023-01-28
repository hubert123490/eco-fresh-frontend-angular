import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-image',
  templateUrl: './customer-image.component.html',
  styleUrls: ['./customer-image.component.scss']
})
export class CustomerImageComponent implements OnInit {
  @Input() src : string;
  @Input() alt : string;


  constructor() { 
    this.src = "";
    this.alt = "";
  }

  ngOnInit(): void {
  }

}
