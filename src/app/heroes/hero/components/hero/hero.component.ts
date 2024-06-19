import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;

  get capitalizedname(): string {
    return this.nombre.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }

  getChangedName(): void {
    this.nombre = 'Batman';
  }
  getChangedaAge(): void {
    this.edad = 50;
  }

  getReset(): void {
    this.nombre = 'Ironman';
    this.edad = 45;
  }
}
