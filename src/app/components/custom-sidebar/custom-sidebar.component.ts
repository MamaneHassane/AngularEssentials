import {Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-sidebar',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './custom-sidebar.component.html',
  styleUrl: './custom-sidebar.component.css'
})
export class CustomSidebarComponent implements OnInit {
  ngOnInit(){

  }

}
