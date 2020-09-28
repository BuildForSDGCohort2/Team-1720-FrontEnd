import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './modules/public/countdown-timer/countdown-timer.component';
import { ErrorPageComponent } from './modules/public/error-page/error-page.component';

// ------ External Libraries ----------------
import { CountdownModule } from 'ngx-countdown';
import { HomeComponent } from './modules/public/home/home.component';
import { TermsAndConditionsComponent } from './modules/public/legal/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './modules/public/legal/privacy-policy/privacy-policy.component';
import { HowItWorksComponent } from './modules/public/how-it-works/how-it-works.component';
import { AboutUsComponent } from './modules/public/about-us/about-us.component';
import { LoginComponent } from './modules/public/login/login.component';
import { PublicProfileComponent } from './modules/public/public-profile/public-profile.component';
import { SearchResultsComponent } from './modules/public/search-results/search-results.component';
import { PublicHeaderComponent } from './shared/components/navigation/public-header/public-header.component';
import { AdminHeaderComponent } from './shared/components/navigation/admin-header/admin-header.component';
import { AdminFooterComponent } from './shared/components/navigation/admin-footer/admin-footer.component';
import { PublicFooterComponent } from './shared/components/navigation/public-footer/public-footer.component';
import { SignUpComponent } from './modules/public/sign-up/sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LegalComponent } from './modules/public/legal/legal.component';
import { DashboardComponent } from './modules/admin/admin/dashboard/dashboard.component';
import { ProfileComponent } from './modules/admin/admin/profile/profile.component';
import { TreatmentsComponent } from './modules/admin/admin/treatments/treatments.component';
import { HealthCardComponent } from './modules/admin/admin/health-card/health-card.component';
import { PaymentsComponent } from './modules/admin/admin/payments/payments.component';
import { SettingsComponent } from './modules/admin/admin/settings/settings.component';
import { DropdownExpandDirective } from './shared/directives/dropdown-expand.directive';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { HeaderNotificationComponent } from './shared/components/cards/header-notification/header-notification.component';
import { CardCurrentTreatmentMiniComponent } from './shared/components/cards/card-current-treatment-mini/card-current-treatment-mini.component';
import { CardPrimaryPhysicianMiniComponent } from './shared/components/cards/card-primary-physician-mini/card-primary-physician-mini.component';
import { CardProfileMiniComponent } from './shared/components/cards/card-profile-mini/card-profile-mini.component';
import { CardPaymentsMiniComponent } from './shared/components/cards/card-payments-mini/card-payments-mini.component';
import { CardRecentTreatmentsMiniComponent } from './shared/components/cards/card-recent-treatments-mini/card-recent-treatments-mini.component';
import { CardPaymentsComponent } from './shared/components/cards/card-payments/card-payments.component';
import { CardTreatmentsComponent } from './shared/components/cards/card-treatments/card-treatments.component';
import { CardHealthCardComponent } from './shared/components/cards/card-health-card/card-health-card.component';
// ------ End of External Libraries ----------

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    ErrorPageComponent,
    HomeComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    HowItWorksComponent,
    AboutUsComponent,
    LoginComponent,
    PublicProfileComponent,
    SearchResultsComponent,
    PublicHeaderComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    PublicFooterComponent,
    SignUpComponent,
    LegalComponent,
    DashboardComponent,
    ProfileComponent,
    TreatmentsComponent,
    HealthCardComponent,
    PaymentsComponent,
    SettingsComponent,
    DropdownExpandDirective,
    AdminComponent,
    HeaderNotificationComponent,
    CardCurrentTreatmentMiniComponent,
    CardPrimaryPhysicianMiniComponent,
    CardProfileMiniComponent,
    CardPaymentsMiniComponent,
    CardRecentTreatmentsMiniComponent,
    CardPaymentsComponent,
    CardTreatmentsComponent,
    CardHealthCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
