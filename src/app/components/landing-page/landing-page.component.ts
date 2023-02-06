import { Component, OnInit } from '@angular/core';
import { landingPageData } from 'src/app/configs/landing-page.config';
import { LandingPageData } from './data-types.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  landingPageData : LandingPageData = landingPageData

  constructor() { }

  ngOnInit(): void {
  }

}
