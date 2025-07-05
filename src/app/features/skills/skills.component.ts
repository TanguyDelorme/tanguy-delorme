import {Component, signal, WritableSignal} from '@angular/core';
import {StarComponent} from './star/star.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {SkillsModel} from '../../core/model/skills.model';
import {TypeSkillEnum} from '../../core/enum/type-skill.enum';
import {Tag} from 'primeng/tag';

@Component({
  selector: 'app-skills',
  imports: [
    StarComponent,
    MatTableModule,
    Tag
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  displayedColumns: string[] = ['label', 'star', 'type'];

  techData: WritableSignal<SkillsModel[]> = signal([
    {
      label: 'Angular',
      star: 5,
      type: TypeSkillEnum.FRONT
    },
    {
      label: 'Typescript',
      star: 5,
      type: TypeSkillEnum.FRONT
    },
    {
      label: 'Tailwind',
      star: 4,
      type: TypeSkillEnum.FRONT
    },
    {
      label: 'Accessibilité RGAA',
      star: 4,
      type: TypeSkillEnum.FRONT
    },
    {
      label: 'Web Component',
      star: 5,
      type: TypeSkillEnum.FRONT
    },
    {
      label: 'Material Angular / PrimeNG',
      star: 5,
      type: TypeSkillEnum.FRONT
    },
    {
      label: 'VueJs',
      star: 3,
      type: TypeSkillEnum.FRONT
    },
    {
      label: 'Svelte',
      star: 2,
      type: TypeSkillEnum.FRONT
    },
    {
      label: 'Java',
      star: 4,
      type: TypeSkillEnum.BACK
    },
    {
      label: 'Spring Boot',
      star: 4,
      type: TypeSkillEnum.BACK
    },
    {
      label: 'Liquibase',
      star: 4,
      type: TypeSkillEnum.BACK
    },
    {
      label: 'AWS',
      star: 2,
      type: TypeSkillEnum.BACK
    },
    {
      label: 'Python',
      star: 3,
      type: TypeSkillEnum.BACK
    },
    {
      label: 'Flutter / Dart',
      star: 3,
      type: TypeSkillEnum.BACK
    },
    {
      label: 'MySQL / PostgreSQL / Oracle',
      star: 5,
      type: TypeSkillEnum.TOOLS
    },
    {
      label: 'Git',
      star: 5,
      type: TypeSkillEnum.TOOLS
    },
    {
      label: 'Gitlab CI/CD',
      star: 3,
      type: TypeSkillEnum.TOOLS
    },
    {
      label: 'Jenkins',
      star: 3,
      type: TypeSkillEnum.TOOLS
    },
    {
      label: 'Agilité / Scrum',
      star: 5,
      type: TypeSkillEnum.METHODOLOGY
    },
    {
      label: 'Safe',
      star: 4,
      type: TypeSkillEnum.METHODOLOGY
    },
    {
      label: 'IntelliJ',
      star: 5,
      type: TypeSkillEnum.SOFTWARE
    },
    {
      label: 'Jira',
      star: 4,
      type: TypeSkillEnum.SOFTWARE
    },
    {
      label: 'Confluence',
      star: 4,
      type: TypeSkillEnum.SOFTWARE
    },
    {
      label: 'Teams',
      star: 5,
      type: TypeSkillEnum.SOFTWARE
    },
  ])
  techDataSource = new MatTableDataSource(this.techData());

  public getSeverityByType(type: TypeSkillEnum): string {
    switch (type) {
      case TypeSkillEnum.FRONT:
        return 'primary';
      case TypeSkillEnum.BACK:
        return 'danger';
      case TypeSkillEnum.TOOLS:
        return 'contrast';
      case TypeSkillEnum.SOFTWARE:
        return 'secondary';
      case TypeSkillEnum.METHODOLOGY:
        return 'warn';
      default:
        return 'contrast';
    }
  }
}
