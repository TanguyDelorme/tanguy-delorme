import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-studies-card',
  imports: [],
  templateUrl: './studies-card.component.html',
  styleUrl: './studies-card.component.css',
  host: { 'class': 'w-full'}
})
export class StudiesCardComponent {
  title = input('');
  iconClass = input('');
  items: InputSignal<string[]> = input<string[]>([]);
}
