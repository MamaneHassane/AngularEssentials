import { Routes } from '@angular/router';
import { DivsSelectionComponent } from './divs-selection/divs-selection.component';
import { BrowseItemsComponent } from './browse-items/browse-items.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo: "home",
        pathMatch : "full"
    },
    {
        path: "home",
        component : HomeComponent
    },
    {
        path:"divsselection",
        component: DivsSelectionComponent
    },
    {
        path:"browse",
        component: BrowseItemsComponent
    }
];
