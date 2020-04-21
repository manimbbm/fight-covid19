import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';

import {MainMenuComponent} from './main-menu.component';
import {TopBarComponent} from './top-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule],
  exports: [
    TopBarComponent],
  declarations: [
    MainMenuComponent,
    TopBarComponent],
  providers: []
})

export class CoreModule {

}
