import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DivsSelectionComponent } from './divs-selection/divs-selection.component';
import { NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DivsSelectionComponent,
    CustomNavbarComponent,
    HomeComponent,
    FormsModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training';
}
