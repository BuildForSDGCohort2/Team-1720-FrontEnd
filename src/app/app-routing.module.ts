import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Public pages
import { HomeComponent } from './modules/public/home/home.component';
import { LoginComponent } from './modules/public/login/login.component';
import { SignUpComponent } from './modules/public/sign-up/sign-up.component';
import { HowItWorksComponent } from './modules/public/how-it-works/how-it-works.component';
import { AboutUsComponent } from './modules/public/about-us/about-us.component';
import { PublicProfileComponent } from './modules/public/public-profile/public-profile.component';
import { SearchResultsComponent } from './modules/public/search-results/search-results.component';
import { LegalComponent } from './modules/public/legal/legal.component';
import { PrivacyPolicyComponent } from './modules/public/legal/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './modules/public/legal/terms-and-conditions/terms-and-conditions.component';
import { CountdownTimerComponent } from './modules/public/countdown-timer/countdown-timer.component';
import { ErrorPageComponent } from './modules/public/error-page/error-page.component';

// Admin Pages
import { AdminComponent } from './modules/admin/admin/admin.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { HealthCardComponent } from './modules/admin/health-card/health-card.component';
import { ProfileComponent } from './modules/admin/profile/profile.component';
import { SettingsComponent } from './modules/admin/settings/settings.component';
import { TreatmentsComponent } from './modules/admin/treatments/treatments.component';
import { PaymentsComponent } from './modules/admin/payments/payments.component';

const routes: Routes = [
  {
    path: '',
    component: CountdownTimerComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'search-results',
    component: SearchResultsComponent
  },
  {
    path: 'legal',
    component: LegalComponent,
    children: [
      {
        path: '',
        component: LegalComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'health-card',
        component: HealthCardComponent
      },
      {
        path: 'treatments',
        component: TreatmentsComponent
      },
      {
        path: 'payments',
        component: PaymentsComponent
      }
    ]
  },
  {
    path: 'public-profile',
    component: PublicProfileComponent
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
