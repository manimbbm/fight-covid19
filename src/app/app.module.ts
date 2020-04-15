import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ModalStructureComponent } from './modal-structure/modal-structure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FunComponent } from './fun/fun.component';
import { DangerComponent } from './danger/danger.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ModalStructureComponent,
    TopBarComponent,
    FunComponent,
    DangerComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
