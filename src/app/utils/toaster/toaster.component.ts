import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ToasterService } from '../toaster.service';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements AfterViewInit {
  @Input() when: string = 'Just now';
  @ViewChild('toast') toastElement: ElementRef;
  public toast: Toast;
  constructor(public service: ToasterService) {
    this.service.message.subscribe(() => requestAnimationFrame(() => this.toast.show()));
  }

  ngAfterViewInit() {
    this.toast = new Toast(this.toastElement.nativeElement);
  }
}
