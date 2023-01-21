import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-image',
  templateUrl: './product-details-image.component.html',
  styleUrls: ['./product-details-image.component.scss']
})
export class ProductDetailsImageComponent implements OnInit {
  slides =[{
    url: './../../assets/main-page/products/chicken__soup.jpg',
    title: "tmp"
  },
  {
    url: './../../assets/landing-page/welcome.jpg',
    title: "tmp"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
