import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErreurComponent} from './layout/erreur/erreur.component';
import {HomeComponent} from './public/home/home.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {DocumentationComponent} from './public/documentation/documentation.component';
import {ContactComponent} from './public/contact/contact.component';
import {PricingComponent} from './public/pricing/pricing.component';
import {AboutComponent} from './public/about/about.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {ProfileComponent} from './admin/profile/profile.component';
import {UserDetailComponent} from './admin/user/user-detail/user-detail.component';
import {UserListComponent} from './admin/user/user-list/user-list.component';
import {ListDeviceComponent} from './admin/device/list-device/list-device.component';
import {DetailDeviceComponent} from './admin/device/detail-device/detail-device.component';
import {ListSmsComponent} from './admin/sms/list-sms/list-sms.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'document', component: DocumentationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'prix', component: PricingComponent},
  {path: 'about', component: AboutComponent},

  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'devices', component: ListDeviceComponent},
  {path: 'devices/:code', component: DetailDeviceComponent},
  {path: 'message', component: ListSmsComponent},
  // {path:'setting',component:SettingComponent},
  {path: '**', component: ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
