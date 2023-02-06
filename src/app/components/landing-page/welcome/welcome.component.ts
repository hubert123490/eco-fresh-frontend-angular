import { Component, Input, OnInit } from '@angular/core';
import { WelcomeData } from '../data-types.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @Input() welcomeData?: WelcomeData;

  constructor() {}

  ngOnInit(): void {}
}
