import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationComponent } from './components/animation/animation.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { DutyContainerComponent } from './components/duty-container/duty-container.component';
import { EvaluatedComponent } from './components/evaluated/evaluated.component';
import { HttpComponent } from './components/http/http.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PwaComponent } from './components/pwa/pwa.component';
import { RouteChildAComponent } from './components/routing/route-child-a/route-child-a.component';
import { RouteChildBComponent } from './components/routing/route-child-b/route-child-b.component';
import { RoutingComponent } from './components/routing/routing.component';
import { CanAccessGuard } from './guards/can-access.guard';


const routes: Routes = [
  { path: 'communication', component: CommunicationComponent },
  { path: 'evaluated', component: EvaluatedComponent },
  { path: 'conditional', component: ConditionalComponent },
  { path: 'services', component: HttpComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'async', component: ParentComponent },
  { path: 'ngrx', component: DutyContainerComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'pwa', component: PwaComponent },
  { 
    path: 'routing', 
    component: RoutingComponent, 
    children: [
      { path: 'child-a', component: RouteChildAComponent },
      { path: 'child-b', component: RouteChildBComponent },
      { path: ':id', component: RouteChildBComponent },
    ],
    canActivate: [CanAccessGuard],
  },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }, 
  { path: '', redirectTo: '/communication', pathMatch: 'full' }, // redirect to `CommunicationComponent` at root route :P
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
