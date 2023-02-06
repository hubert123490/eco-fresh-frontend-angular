import { Component, Input, OnInit } from '@angular/core';
import { CustomerStory } from '../../data-types.interface';

@Component({
  selector: 'app-customer-story',
  templateUrl: './customer-story.component.html',
  styleUrls: ['./customer-story.component.scss'],
})
export class CustomerStoryComponent implements OnInit {
  @Input() isOdd?: boolean;
  @Input() customerData? : CustomerStory

  constructor() {}

  ngOnInit(): void {}

  getAlignmentStyle(): object {
    if (this.isOdd) return { 'story__info--rightAlign': true };
    return { 'story__info--leftAlign': true };
  }
}
