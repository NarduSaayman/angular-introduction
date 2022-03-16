import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunicationComponent } from './components/communication/communication.component';
import { EvaluatedComponent } from './components/evaluated/evaluated.component';


const routes: Routes = [
  { path: 'communication', component: CommunicationComponent },
  { path: 'evaluated', component: EvaluatedComponent },
  { path: '', redirectTo: '/communication', pathMatch: 'full' }, // redirect to `CommunicationComponent` at root route :P
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
