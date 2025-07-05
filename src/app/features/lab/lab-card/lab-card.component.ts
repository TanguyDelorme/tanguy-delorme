import {Component, input, InputSignal} from '@angular/core';
import {Card} from 'primeng/card';
import {LabModel} from '../../../core/model/lab.model';

@Component({
  selector: 'app-lab-card',
  imports: [
    Card
  ],
  templateUrl: './lab-card.component.html',
  styleUrl: './lab-card.component.css'
})
export class LabCardComponent {
  value: InputSignal<LabModel> = input.required<LabModel>()
}
