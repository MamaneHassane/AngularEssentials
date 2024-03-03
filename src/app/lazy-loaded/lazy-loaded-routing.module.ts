import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponentComponent } from './components/lazy-component/lazy-component.component';

const routes: Routes = [
  {
    path : '',
    component : LazyComponentComponent 
    // N'ajoutez jamais 'component' à la fin du nom d'un component, sinon vous aurez cette abération :-)
    // je la laisse pour que vous voyez bien que c'est moche :-)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }
