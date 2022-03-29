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
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { FilterGradsPipe } from './pipes/filter-grads.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FilterDriversPipe } from './pipes/filter-drivers.pipe';
import { RoutingComponent } from './components/routing/routing.component';
import { RouteChildAComponent } from './components/routing/route-child-a/route-child-a.component';
import { RouteChildBComponent } from './components/routing/route-child-b/route-child-b.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

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
    DriverComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    FilterGradsPipe,
    ParentComponent,
    ChildComponent,
    FilterDriversPipe,
    RoutingComponent,
    RouteChildAComponent,
    RouteChildBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ExponentialStrengthPipe, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
