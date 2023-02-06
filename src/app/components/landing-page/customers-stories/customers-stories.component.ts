import { Component, Input, OnInit } from '@angular/core';
import { CustomersStoriesData } from '../data-types.interface';

@Component({
  selector: 'app-customers-stories',
  templateUrl: './customers-stories.component.html',
  styleUrls: ['./customers-stories.component.scss'],
})
export class CustomersStoriesComponent implements OnInit {
  @Input() customersStories? : CustomersStoriesData;
  
  constructor() {}

  ngOnInit(): void {}
}
