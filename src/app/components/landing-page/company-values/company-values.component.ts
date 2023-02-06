import { Component, Input, OnInit } from '@angular/core';
import { CompanyValuesData } from '../data-types.interface';

@Component({
  selector: 'app-company-values',
  templateUrl: './company-values.component.html',
  styleUrls: ['./company-values.component.scss']
})
export class CompanyValuesComponent implements OnInit {
  @Input() companyValues? : CompanyValuesData

  constructor() { }

  ngOnInit(): void {
  }

}
