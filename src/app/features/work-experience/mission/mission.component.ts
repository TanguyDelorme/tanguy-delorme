import {Component, input, InputSignal} from '@angular/core';
import {WorkExperienceModel} from '../../../core/model/work-experience.model';

@Component({
  selector: 'app-mission',
  imports: [],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {
  mission: InputSignal<WorkExperienceModel> = input.required();
}
