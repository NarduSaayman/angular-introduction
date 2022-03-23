import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { EvaluatedComponent } from './components/evaluated/evaluated.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommunicationChildIoComponent } from './components/communication/communication-child-io/communication-child-io.component';
import { CommunicationChildBiabComponent } from './components/communication/communication-child-biab/communication-child-biab.component';
import { CommunicationChildServiceComponent } from './components/communication/communication-child-service/communication-child-service.component';
import { HttpComponent } from './components/http/http.component';
import { DriverComponent } from './components/driver/driver.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    EvaluatedComponent,
    ConditionalComponent,
    NotFoundComponent,
    CommunicationChildIoComponent,
    CommunicationChildBiabComponent,
    CommunicationChildServiceComponent,
    HttpComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
