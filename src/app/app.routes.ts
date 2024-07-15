import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DivsSelectionComponent} from "./pages/divs-selection/divs-selection.component";
import {BrowseItemsComponent} from "./pages/browse-items/browse-items.component";
import {ReactiveFormsComponent} from "./pages/reactive-forms/reactive-forms.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'template-driven-forms',
    component: DivsSelectionComponent
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent
  },
  {
    path: 'browse-items',
    component: BrowseItemsComponent
  },
  {
    path: 'lazy',
    loadChildren: ()=>import("./lazy-loaded/lazy-loaded.module").then(m=>m.LazyLoadedModule)
  },
];
