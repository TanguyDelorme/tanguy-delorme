import {Component, input, InputSignal} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-studies-card',
  imports: [],
  templateUrl: './studies-card.component.html',
  styleUrl: './studies-card.component.css',
  host: { 'class': 'w-full'},
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('0.7s 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class StudiesCardComponent {
  title = input('');
  iconClass = input('');
  items: InputSignal<string[]> = input<string[]>([]);
}
