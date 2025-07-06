import {Component, signal, WritableSignal} from '@angular/core';
import {CardHomeComponent} from './card-home/card-home.component';
import {ReferentModel} from '../../core/model/referent.model';

@Component({
  selector: 'app-home',
    imports: [
      CardHomeComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  refs: WritableSignal<ReferentModel[]> = signal<ReferentModel[]>([
    {
      name: 'Marek ALGOUD',
      company: 'CATS'
    },
    {
      name: 'Anna SMITH',
      company: 'EdF'
    }
  ])
}
