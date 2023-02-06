import { Component, Input, OnInit } from '@angular/core';
import { QueriesData } from '../data-types.interface';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {
  @Input() queries? : QueriesData;

  constructor() { }

  ngOnInit(): void {
  }

}
