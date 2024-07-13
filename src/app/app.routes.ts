import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DivsSelectionComponent} from "./pages/divs-selection/divs-selection.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'template-driven-forms',
    component: DivsSelectionComponent
  },
];
