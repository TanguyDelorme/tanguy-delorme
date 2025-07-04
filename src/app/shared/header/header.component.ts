import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RoutesApp} from '../../core/constants/routes-app';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    RouterLink,
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  protected readonly routesEvent = RoutesApp;
}
