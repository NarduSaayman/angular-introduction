import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { EvaluatedComponent } from './components/evaluated/evaluated.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    EvaluatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
