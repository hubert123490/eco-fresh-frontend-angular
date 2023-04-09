import { Component, Input } from '@angular/core';
import { HttpError } from '../../../http-resource-handler/http-resource/HttpError';

@Component({
  selector: 'app-error-area',
  templateUrl: './error-area.component.html',
  styleUrls: ['./error-area.component.scss'],
})
export class ErrorAreaComponent {
  @Input() public errorHandler?: HttpError;
}
