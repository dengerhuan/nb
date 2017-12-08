import {Component, OnInit} from '@angular/core';
import {SettingService} from '../../core/service/setting.service';

@Component({
  selector: 'nb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  searchToggleStatus: boolean;

  constructor(public setting: SettingService) {
    console.log(this.setting.layout);
  }

  ngOnInit() {
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }

  toggleCollapsedSideabar() {
    this.setting.setLayout('collapsed', !this.setting.layout.collapsed);
  }
}
