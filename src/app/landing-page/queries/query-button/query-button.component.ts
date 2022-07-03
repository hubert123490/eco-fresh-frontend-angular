import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-button',
  templateUrl: './query-button.component.html',
  styleUrls: ['./query-button.component.scss'],
})
export class QueryButtonComponent implements OnInit {
  @Input() text: string;

  constructor() {
    this.text = '';
  }

  ngOnInit(): void {}
}
