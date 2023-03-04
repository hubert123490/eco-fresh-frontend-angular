import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent{
  @Input() title : string = "Add to cart";
  @Input() description : string = "Do you really want to add this item to cart?";
  @Input() confirmText : string = "Yes"
  @Input() cancelText : string = "No"
  @ViewChild('modal', {static: false}) modal!: ElementRef;
  
  constructor() {}

  public showModal() {
    this.modal.nativeElement.showModal()
  }

  public closeModal() {
    this.modal.nativeElement.close();
  }

  public confirmModal(callback : Function = () => {}) {
    callback();
    this.closeModal();
  }
}
