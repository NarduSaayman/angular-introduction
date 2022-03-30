import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

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
import { DatePipe, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DutyContainerComponent } from './components/duty-container/duty-container.component';
import { SelectedOpsComponent } from './components/duty-container/selected-ops/selected-ops.component';
import { DutyControllerComponent } from './components/duty-container/duty-controller/duty-controller.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromOps from './store/ops.reducer';
import { OpsEffects } from './store/ops.effects';

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
    DutyContainerComponent,
    SelectedOpsComponent,
    DutyControllerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    SharedModule,

    StoreModule.forRoot({}, {}),

    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    StoreModule.forFeature(fromOps.opsFeatureKey, fromOps.reducer),

    EffectsModule.forFeature([OpsEffects])
  ],
  providers: [DatePipe, ExponentialStrengthPipe, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
