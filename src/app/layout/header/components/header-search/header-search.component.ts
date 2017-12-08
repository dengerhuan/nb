import {Component, HostBinding, OnInit, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'nb-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.less']
})
export class HeaderSearchComponent implements AfterViewInit {


  q: string;

  @ViewChild('input') input;

  ipt: HTMLInputElement;

  @HostBinding('class.header-search__focus')
  focus = true;

  @HostBinding('class.header-search__toggled')
  searchToggled = false;


  @Input()
  set toggleChange(value: boolean) {
    if (typeof value === 'undefined') {
      return;
    }
    this.searchToggled = true;
    this.focus = true;
    setTimeout(() => this.ipt.focus(), 300);
  }

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {

    this.ipt = this.elementRef.nativeElement.querySelector('.ant-input') as HTMLInputElement;

  }

  qFocus() {
    this.focus = true;
  }

  qBlur() {
    this.focus = false;
    this.searchToggled = false;
  }
}
