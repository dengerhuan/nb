import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {LayoutComponent} from './layout.component';
import {HeaderSearchComponent} from './header/components/header-search/header-search.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HeaderComponent, LayoutComponent, HeaderSearchComponent],
  exports: [HeaderComponent, LayoutComponent]
})
export class LayoutModule {
}
