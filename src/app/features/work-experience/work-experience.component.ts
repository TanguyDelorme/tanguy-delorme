import {Component, signal, WritableSignal} from '@angular/core';
import {MatStep, MatStepContent, MatStepLabel, MatStepper} from "@angular/material/stepper";
import {WorkExperienceModel} from '../../core/model/work-experience.model';
import {MissionComponent} from './mission/mission.component';

@Component({
  selector: 'app-work-experience',
  imports: [
    MatStep,
    MatStepContent,
    MatStepLabel,
    MatStepper,
    MissionComponent
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
    cats: WritableSignal<WorkExperienceModel>  = signal({
      timeline: 'Depuis novembre 2024',
      job: 'Développeur front-end',
      client: 'Crédit Agricole Technology Services',
      tasks: [
        'Corrections de bugs',
        'Développement en autonomie de nouvelles fonctionalités',
        'Montée de version d\'Angular 15 à 19 ',
        'Création d\'application from scratch',
        'Rédaction des Tests Unitaires',
        'Déploiement des applications sur différents environnements',
        'Revue de code',
        'Participation aux rituels agiles',
        'Veille'
      ],
      context: 'J\'ai intégré une équipe de 4 développeurs back-end, 1 PO, 2 BA et 1 scrum master. Je suis le seul développeur front-end et développe 3 applications. Une consiste à déléguer des boites mail, une à créer des alertes windows et le dernière à copier les adresses mail de liste de diffusion',
      keywords: [
        'Angular 15 à 19',
        'Tailwind',
        'Karma / Jasmine / Jest',
        'Storybook / Webcomponent',
        'Accessibilité RGAA',
        'Gitlab CI'
      ]
    });

    edf1: WritableSignal<WorkExperienceModel>  = signal({
      timeline: 'De mars 2023 à octobre 2024',
      job: 'Développeur front-end',
      client: 'EdF',
      tasks: [
        'Corrections de bugs',
        'Développement en autonomie de nouvelles fonctionalités',
        'Création d\'application from scratch',
        'Rédaction des Tests Unitaires',
        'Déploiement des applications sur différents environnements',
        'Revue de code',
        'Recueil des besoins métiers',
        'Participation aux rituels agiles'
      ],
      context: 'J\'ai intégré une équipe de 1 développeur back-end, 1 PO et 2 développeurs front-end et développe 2 applications. Une consiste à dématérialiser les documents dans les salles de commandes et l\'autre à rechercher des équipements.',
      keywords: [
        'Angular 16',
        'PWA',
        'IndexedDb',
        'Karma / Jasmine',
        'Jenkins',
        'AWS',
        'Python'
      ]
    });

  edf2: WritableSignal<WorkExperienceModel>  = signal({
    timeline: 'D\'octobre 2021 à mars 2023',
    job: 'Développeur fullstack',
    client: 'EdF',
    tasks: [
      'Corrections de bugs',
      'Développement en autonomie de nouvelles fonctionalités',
      'MCO (Maintien en Condition Opérationnelle) nécessitant soit uneintervention fonctionnelle soit un script pour débloquer les utilisateursavec contrainte de temps (4h)',
      'Rédaction des Tests Unitaires',
      'Refonte technique des technologies obsolètes',
      'Déploiement des applications sur différents environnements',
      'Revue de code',
      'Recueil des besoins métiers',
      'Participation aux rituels agiles'
    ],
    context: 'J\'ai intégré une équipe de 6 développeurs fullstack, 1 PO, 1 SM et 1 BA. L\'application consiste mettre en sécurité les intervenants et installations nucléaires pour la maintenance de la centrale puis remise en marche',
    keywords: [
      'Angular 13',
      'AngularJS',
      'Java',
      'SpringBoot',
      'Oracle',
      'Jenkins',
    ]
  });

  technicAtome: WritableSignal<WorkExperienceModel>  = signal({
    timeline: 'De juin 2021 à août 2021',
    job: 'Développeur fullstack',
    client: 'TechnicAtome',
    tasks: [
      'Corrections de bugs',
      'Développement from sratch, en autonomie de l\'application',
      'Intégration d\'une douchette',
      'Recueil des besoins métiers',
    ],
    context: 'J\'ai développé ce logiciel en totale autonomie, il n\'y avait pas d\'équipe autour de moi. Il consiste à rechercher des équipements dans les sous-marins avec un code ou une douchette',
    keywords: [
      '.NET',
      'WPF',
      'Maximo'
    ]
  });

  stMicro: WritableSignal<WorkExperienceModel>  = signal({
    timeline: 'D\'avril 2021 à septembre 2021',
    job: 'Développeur fullstack',
    client: 'StMicroelectronics',
    tasks: [
      'Corrections de bugs',
      'Développement de nouvelles fonctionalités',
    ],
    context: 'J\'ai intégré une équipe composée de 2 développeur full-stack et 1 CP. L\'application consiste à créer des modèles de cartes électroniques',
    keywords: [
      'Angular 10',
      'Java',
      'Spring Boot',
      'MySQL'
    ]
  });

  mapi: WritableSignal<WorkExperienceModel>  = signal({
    timeline: 'De septembre 2019 à mars 2021',
    job: 'Développeur front-end',
    client: 'MAPI',
    tasks: [
      'Corrections de bugs',
      'Développement en autonomie de nouvelles fonctionalités',
      'Recueil des besoins métiers',
      'Participation aux rituels agiles',
      'Démo chez le client',
    ],
    context: 'J\'ai intégré une équipe composée de 2 à 10 développeurs et 2 CP. J\ai développé un site back office pour administrer le site client qui a été refondu ISO',
    keywords: [
      'Angular 10',
      'Responsive',
      'NoSQL',
      'Docker',
      'PHP',
      'Symfony'
    ]
  });

  edf3: WritableSignal<WorkExperienceModel>  = signal({
    timeline: 'De mars 2019 à septembre 2019',
    job: 'Développeur fullstack',
    client: 'EdF',
    tasks: [
      'Corrections de bugs',
      'Développement en autonomie de nouvelles fonctionalités',
      'Recueil des besoins métiers',
      'Participation aux rituels agiles'
    ],
    context: 'J\'ai intégré une équipe composée de 4 développeurs et 1 CP. J\ai développé une application permettant la capitalisation des tâches de maintenance dans les centrales nucléaires',
    keywords: [
      'Angular 10',
      'Java',
      'Spring Boot',
      'Jenkins',
      'MySQL'
    ]
  });
}
