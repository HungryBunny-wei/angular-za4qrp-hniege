import { Component, ViewChild, ElementRef } from '@angular/core';
import {Overlay, OverlayKeyboardDispatcher, OverlayRef} from '@angular/cdk/overlay';

@Component({
  selector: 'nz-demo-alert-basic',
  template: `
      <div #ref style="display: none;">
        <div class="ant-modal-mask"></div>
        <div class="ant-modal-wrap">
          <div class="ant-modal">
          </div>
        </div>
      </div>
    <button (click)="open()"></button>
  `,
  styles: [
    `
.ant-modal{
  width: 3.2rem;
  backgroud: #fff;
}
    `
  ]
})
export class NzDemoAlertBasicComponent {
@ViewChild('ref', {static: false}) ref: ElementRef<HTMLElement>;

  private container: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayKeyboardDispatcher: OverlayKeyboardDispatcher,
    ){

  }

    ngOnInit(): void {
    // Place the modal dom to elsewhere
    this.container = this.overlay.create();
  }

  open(){
    console.log(this.ref.nativeElement);
    this.ref.nativeElement.style.display = 'block'
    this.container.overlayElement.appendChild(this.ref.nativeElement);
  }
}