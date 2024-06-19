import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule],
  providers: [],
})
export class ListModule {}
