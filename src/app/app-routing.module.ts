import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunicationComponent } from './components/communication/communication.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { EvaluatedComponent } from './components/evaluated/evaluated.component';
import { HttpComponent } from './components/http/http.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: 'communication', component: CommunicationComponent },
  { path: 'evaluated', component: EvaluatedComponent },
  { path: 'conditional', component: ConditionalComponent },
  { path: 'services', component: HttpComponent },
  { path: '', redirectTo: '/communication', pathMatch: 'full' }, // redirect to `CommunicationComponent` at root route :P
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
