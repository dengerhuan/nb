import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// region zorro

import {
  // LoggerModule,
  // NzLocaleModule,
  NzButtonModule,
  NzAlertModule,
  NzBadgeModule,
  // NzCalendarModule,
  NzCascaderModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzFormModule,
  NzInputModule,
  NzInputNumberModule,
  NzGridModule,
  NzMessageModule,
  NzModalModule,
  NzNotificationModule,
  NzPaginationModule,
  NzPopconfirmModule,
  NzPopoverModule,
  NzRadioModule,
  NzRateModule,
  NzSelectModule,
  NzSpinModule,
  NzSliderModule,
  NzSwitchModule,
  NzProgressModule,
  NzTableModule,
  NzTabsModule,
  NzTagModule,
  NzTimePickerModule,
  NzUtilModule,
  NzStepsModule,
  NzDropDownModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzLayoutModule,
  NzRootModule,
  NzCarouselModule,
  // NzCardModule,
  NzCollapseModule,
  NzTimelineModule,
  NzToolTipModule,
  // NzBackTopModule,
  // NzAffixModule,
  // NzAnchorModule,
  NzAvatarModule,
  // SERVICES
  NzNotificationService,
  NzMessageService
} from 'ng-zorro-antd';
const ZORROMODULES = [
  // LoggerModule,
  // NzLocaleModule,
  NzButtonModule,
  NzAlertModule,
  NzBadgeModule,
  // NzCalendarModule,
  NzCascaderModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzFormModule,
  NzInputModule,
  NzInputNumberModule,
  NzGridModule,
  NzMessageModule,
  NzModalModule,
  NzNotificationModule,
  NzPaginationModule,
  NzPopconfirmModule,
  NzPopoverModule,
  NzRadioModule,
  NzRateModule,
  NzSelectModule,
  NzSpinModule,
  NzSliderModule,
  NzSwitchModule,
  NzProgressModule,
  NzTableModule,
  NzTabsModule,
  NzTagModule,
  NzTimePickerModule,
  NzUtilModule,
  NzStepsModule,
  NzDropDownModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzLayoutModule,
  NzRootModule,
  NzCarouselModule,
  // NzCardModule,
  NzCollapseModule,
  NzTimelineModule,
  NzToolTipModule,
  // NzBackTopModule,
  // NzAffixModule,
  // NzAnchorModule,
  NzAvatarModule
];
// endregion
// endregion
@NgModule({
  imports: [
    CommonModule,
    ...ZORROMODULES
  ],
  declarations: [],
  exports: [...ZORROMODULES]
})
export class SharedModule {
}
