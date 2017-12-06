import {Injectable} from '@angular/core';


export interface Layout {
  fixed: boolean;
  collapsed: boolean;
  boxed: boolean;
  theme: number;
  lang: string;
}


@Injectable()
export class SettingService {

  private _layout: Layout = null;


  private lo: Layout;

  constructor() {
    this.lo = {
      fixed: true,
      collapsed: false,
      boxed: false,
      theme: 1,
      lang: null
    };
  }

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(this.lo, this._layout);
    }
    return this._layout;
  }

  setLayout(name: string, value: any): boolean {
    console.log('setlayout')
    if (typeof this.layout[name] !== 'undefined') {
      this.layout[name] = value;
      return true;
    }
    return false;
  }
}
