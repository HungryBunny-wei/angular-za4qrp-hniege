import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {Overlay, OverlayKeyboardDispatcher, OverlayRef} from '@angular/cdk/overlay';

@Component({
  selector: 'nz-demo-alert-basic',
  template: `
      <div #ref style="display: none;">
        <div class="ant-modal-mask" (click)="changeModal(false)"></div>
        <div class="ant-modal-wrap" style="pointer-events: none;">
        <!-- 内容区 -->
          <div class="ant-modal" style="pointer-events: auto;">
            <div class=ant-modal-raduis></div>
            <img src="../assets/detail.png">
          </div>
        </div>
      </div>
    <button nz-button (click)="changeModal(true)" nzType="primary">打开</button>
  `,
  styles: [
    `
.ant-modal{
  width: 3.2rem;
  background: #fff;
}
    `
  ]
})
export class NzDemoAlertBasicComponent implements AfterViewInit {
@ViewChild('ref', {static: false}) ref: ElementRef<HTMLElement>;

  private container: OverlayRef;
  constructor(
    private overlay: Overlay,
    private overlayKeyboardDispatcher: OverlayKeyboardDispatcher,
    ){

  }
  ngAfterViewInit(){
    // Place the modal dom to elsewhere
    this.container = this.overlay.create();
    this.container.overlayElement.appendChild(this.ref.nativeElement);
  }

  changeModal(visible: boolean){
    if (visible) {
      if (this.container instanceof OverlayRef) {
        this.ref.nativeElement.style.display = 'block';
        this.overlayKeyboardDispatcher.add(this.container);
      }
    } else {
      if (this.container instanceof OverlayRef) {
        this.ref.nativeElement.style.display = 'none';
        this.overlayKeyboardDispatcher.remove(this.container);
      }
    }
  }

}