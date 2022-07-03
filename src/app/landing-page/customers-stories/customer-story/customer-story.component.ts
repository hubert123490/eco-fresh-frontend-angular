import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-story',
  templateUrl: './customer-story.component.html',
  styleUrls: ['./customer-story.component.scss'],
})
export class CustomerStoryComponent implements OnInit {
  @Input() isEven: boolean;
  @Input() customerName: string;
  @Input() customerBio: string;
  @Input() src: string;
  @Input() alt: string;

  constructor() {
    this.isEven = false;
    this.customerName = '';
    this.customerBio = '';
    this.src = '';
    this.alt = '';
  }

  ngOnInit(): void {}

  getAlignmentStyle(): object {
    if (this.isEven) return { 'story__info--rightAlign': true };
    return { 'story__info--leftAlign': true };
  }
}
