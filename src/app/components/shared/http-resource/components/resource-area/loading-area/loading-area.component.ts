import { Component, Input } from '@angular/core';
import { HttpLoader } from '../../../http-resource-handler/http-resource/HttpLoader';

@Component({
  selector: 'app-loading-area',
  templateUrl: './loading-area.component.html',
  styleUrls: ['./loading-area.component.scss'],
})
export class LoadingAreaComponent {
  @Input() public loadingHandler?: HttpLoader;

  public isLoading() {
    return this.loadingHandler?.componentLoading$;
  }
}
