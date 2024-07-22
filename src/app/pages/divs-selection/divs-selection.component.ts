import {NgClass, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divs-selection',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './divs-selection.component.html',
  styleUrl: './divs-selection.component.css'
})
export class DivsSelectionComponent {
  selectedOption: string = ''
  montrerPhrase1: boolean = false
  montrerPhrase2: boolean = false
}
