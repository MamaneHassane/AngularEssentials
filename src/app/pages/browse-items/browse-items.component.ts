import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import {ItemCardComponent} from "../../components/item-card/item-card.component";

@Component({
  selector: 'app-browse-items',
  standalone: true,
  imports: [
    ItemCardComponent

  ],
  templateUrl: './browse-items.component.html',
  styleUrl: './browse-items.component.css'
})
export class BrowseItemsComponent implements OnInit, OnChanges, OnDestroy {

  // Nouvelle méthode d'injection de dépendences sous Angular 17
  http: HttpClient = inject(HttpClient);

  // Cette méthode s'éxécute à la création du component
  constructor(){

  }

  // On a impléménté l'interface => On doit implémenter la méthode
  // Cette méthode s'éxécute à l'initialisation du component
  ngOnInit(): void {

  }

  // On a impléménté l'interface => On doit implémenter la méthode
  // Cette méthode s'éxécute quand le component subit des changements
  ngOnChanges(changes: SimpleChanges): void {

  }

  // On a impléménté l'interface => On doit implémenter la méthode
  // Cette méthode s'éxécute à la fin du cycle de vie du component
  ngOnDestroy(): void {

  }

}
