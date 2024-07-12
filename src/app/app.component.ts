import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DivsSelectionComponent } from './divs-selection/divs-selection.component';
import { NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomSidebarComponent } from './custom-sidebar/custom-sidebar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DivsSelectionComponent,
    CustomSidebarComponent,
    HomeComponent,
    FormsModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = `Angular Moderne entrainement`;
}
