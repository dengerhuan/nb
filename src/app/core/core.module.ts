import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingService} from './service/setting.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SettingService]
})
export class CoreModule {
}
