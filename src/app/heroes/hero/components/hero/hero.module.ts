import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent],
  exports: [HeroComponent],
  imports: [CommonModule],
  providers: [],
})
export class HeroModule {}
