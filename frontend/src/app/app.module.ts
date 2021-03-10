import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ErreurComponent } from './layout/erreur/erreur.component';
import { AdminMenuComponent } from './layout/admin-menu/admin-menu.component';
import { DocumentationComponent } from './public/documentation/documentation.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { PricingComponent } from './public/pricing/pricing.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './admin/profile/profile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { UserDetailComponent } from './admin/user/user-detail/user-detail.component';
import { ListDeviceComponent } from './admin/device/list-device/list-device.component';
import { DetailDeviceComponent } from './admin/device/detail-device/detail-device.component';
import { ListSmsComponent } from './admin/sms/list-sms/list-sms.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    ErreurComponent,
    AdminMenuComponent,
    DocumentationComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    ProfileComponent,
    DashboardComponent,
    UserListComponent,
    UserDetailComponent,
    ListDeviceComponent,
    DetailDeviceComponent,
    ListSmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
