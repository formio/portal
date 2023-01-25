import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {
  @Input() when: string = 'Just now';
  @ViewChild('toast') toast: ElementRef;
  constructor(public service: ToasterService) {
    this.service.message.subscribe(() => {
      requestAnimationFrame(() => {
        ($(this.toast.nativeElement) as any).toast('show');
      });
    });
  }
}
