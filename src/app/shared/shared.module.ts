import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ant-d
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzGridModule,
    NzTabsModule,
    NzDividerModule,
    NzInputModule,
    NzIconModule,
    NzSwitchModule,
    NzNotificationModule
  ],
  exports: [
    NzGridModule,
    NzTabsModule,
    NzDividerModule,
    NzInputModule,
    NzIconModule,
    NzSwitchModule,
    NzNotificationModule
  ]
})
export class SharedModule { }
