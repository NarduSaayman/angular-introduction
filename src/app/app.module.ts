import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Ant-d
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

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
    NzGridModule,
    NzTabsModule,
    NzDividerModule,
    NzInputModule,
    NzIconModule,
    NzSwitchModule
  ],
  providers: [DatePipe, ExponentialStrengthPipe, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
