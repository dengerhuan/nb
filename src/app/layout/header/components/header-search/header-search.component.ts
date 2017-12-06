import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'nb-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.less']
})
export class HeaderSearchComponent implements OnInit {


  q: string;

  @HostBinding('class.header-search__focus')
  focus = false;

  @HostBinding('class.header-search__toggled')
  searchToggled = false;


  constructor() {
  }

  ngOnInit() {
  }

  qFocus() {
    this.focus = true;
  }

  qBlur() {
    this.focus = false;
    this.searchToggled = false;
  }
}
