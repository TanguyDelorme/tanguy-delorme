import {Component, signal, WritableSignal} from '@angular/core';
import {LabCardComponent} from './lab-card/lab-card.component';
import {LabModel} from '../../core/model/lab.model';

@Component({
  selector: 'app-lab',
  imports: [
    LabCardComponent
  ],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.css',
})
export class LabComponent {
  pokecarcollect: WritableSignal<LabModel> = signal({
    title: 'PokeCardCollect',
    keywords: 'Gestion - Estimation - Scan',
    description: 'PokecardCollect est une application Android de gestion de collection de cartes pokémon, estimation à l\'unité et par série.\n' +
      '    l\'application est développée avec Flutter firebase',
    url: 'https://play.google.com/store/apps/details?id=com.pokemon_card_lib&utm_source=emea_Med',
    urlLabel: 'Voir sur android store',
    image: 'pokecardcollect.webp',
    class: 'bg-[#94c5c9]'
  });

  lorcanacardcollect: WritableSignal<LabModel> = signal({
    title: 'LorCardCollect',
    keywords: 'Gestion - Estimation - Scan',
    description: 'LorCardCollect est une application Android de gestion de collection de cartes pokémon, estimation à l\'unité et par série. L\'application est développée avec Flutter firebase',
    url: 'https://play.google.com/store/apps/details?id=com.lorcanacard_collect&utm_source=emea_Med',
    urlLabel: 'Voir sur android store',
    image: 'lorcardcollect.webp',
    class: 'bg-[#fed273]'
  });

  installationAgricole: WritableSignal<LabModel> = signal({
    title: 'Installation agricole',
    keywords: 'Carte SIG - Filtre - Recherche',
    description: 'Application permettant de répertorier sru une carte les installations agricoles des pays de la loire. Elle permet aussi de rechercher et filtrer via une table interactive les éléments',
    url: 'https://tanguydelorme.github.io/installation-agricole/',
    github: 'https://github.com/TanguyDelorme/installation-agricole',
    urlLabel: 'Aller sur le site',
    image: 'installation-agricole.png',
  });

  tanguy: WritableSignal<LabModel> = signal({
    title: 'Portfolio Tanguy DELORME',
    keywords: 'CV',
    description: 'Portfolio expliquant mes expériences, compétences et quelques projets perso que j\'ai réalisés. N\'hésitez pas à me contacter pour toutes proposition de mission',
    url: 'https://tanguydelorme.github.io/tanguy-delorme/',
    github: 'https://github.com/TanguyDelorme/tanguy-delorme',
    urlLabel: 'Aller sur le site',
    image: 'me-troll.jpg',
  });
}
