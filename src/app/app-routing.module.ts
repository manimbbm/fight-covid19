import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FunComponent} from './fun/fun.component';
import {DangerComponent} from './danger/danger.component';
import {SettingsComponent} from './settings/settings.component';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  {path: 'have-fun', component: FunComponent},
  {path: 'danger', component: DangerComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
