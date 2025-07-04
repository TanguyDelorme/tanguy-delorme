import {Component, signal, WritableSignal} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {StudiesCardComponent} from './studies-card/studies-card.component';
import {StudyModel} from '../../core/model/study.model';

@Component({
  selector: 'app-studies',
  imports: [
    MatStepperModule,
    MatButtonModule,
    StudiesCardComponent
  ],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.css'
})
export class StudiesComponent {
  diploma: WritableSignal<StudyModel> = signal({
    title: 'Diplômes',
    items: [
      'Bac S - Champagnat - 2015 - 2019',
      'DUT Génie électronique et informatique industrielle - Télécom Saint-Etienne - 2013 - 2015',
      'Ingénieur Télécom Saint-Etienne - Développement web et vision industrielle - 2015 - 2019'
    ],
    iconClass: 'fa-solid fa-graduation-cap'
  });

  formation : WritableSignal<StudyModel> = signal({
    title: 'Formations',
    items: ['VueJs 3 - M2i'],
    iconClass: 'fa-solid fa-chalkboard-user'
  });

  certification : WritableSignal<StudyModel> = signal({
    title: 'Certifications',
    items: ['Safe', 'Scrum Dev'],
    iconClass: 'fa-solid fa-file-certificate'
  });
}
