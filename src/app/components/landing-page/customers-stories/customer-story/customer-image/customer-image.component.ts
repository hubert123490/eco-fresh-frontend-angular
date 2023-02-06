import { Component, Input, OnInit } from '@angular/core';
import { ImageData } from '../../../data-types.interface';

@Component({
  selector: 'app-customer-image',
  templateUrl: './customer-image.component.html',
  styleUrls: ['./customer-image.component.scss']
})
export class CustomerImageComponent implements OnInit {
  @Input() imageData? : ImageData;

  constructor() {}

  ngOnInit(): void {
  }

}
