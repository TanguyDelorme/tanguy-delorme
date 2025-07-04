import {Component, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-card-home',
  imports: [
    MatIcon,
    NgClass
  ],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.css'
})
export class CardHomeComponent {
  link = input('#');
  cssClass =  input('');
  svgIcon =  input('');
  iconClass =  input('');
  label =  input('');
}
