import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterService } from './toaster.service';
@NgModule({
  declarations: [
    ToasterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToasterComponent
  ],
  providers: [
    ToasterService
  ]
})
export class UtilsModule { }
