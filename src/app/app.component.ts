import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {HeaderComponent} from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatIconModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private matIconRegistry: MatIconRegistry = inject(MatIconRegistry)
  private domSanitizer: DomSanitizer = inject(DomSanitizer)

  constructor() {
    this.matIconRegistry.addSvgIcon(`studies`, this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/studies.svg"));
    this.matIconRegistry.addSvgIcon(`work-experience`, this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/work-experience.svg"));
    this.matIconRegistry.addSvgIcon(`lab`, this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/lab.svg"));
    this.matIconRegistry.addSvgIcon(`skills`, this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/skills.svg"));
  }
}
