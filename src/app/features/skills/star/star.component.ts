import {Component, input, signal} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-star',
  imports: [
    NgClass
  ],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  max = signal(5);
  rating = input(0);

  isActive(index: number): boolean {
    return index < this.rating();
  }

  get starsArray() {
    return Array(this.max());
  }
}
