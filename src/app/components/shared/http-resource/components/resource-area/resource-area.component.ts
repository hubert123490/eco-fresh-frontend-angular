import { Component, Input } from '@angular/core';
import { HttpResource } from '../../http-resource-handler/http-resource/HttpResource';

@Component({
  selector: 'app-resource-area',
  templateUrl: './resource-area.component.html',
  styleUrls: ['./resource-area.component.scss'],
})
export class ResourceAreaComponent {
  @Input() public httpResource?: HttpResource;
}
