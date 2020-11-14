import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/_helpers/auth.guard';

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
import { ForgotPasswordComponent } from './modules/public/forgot-password/forgot-password.component';

// Admin Pages
import { AdminComponent } from './modules/admin/admin/admin.component';
import { DashboardComponent } from './modules/admin/admin/dashboard/dashboard.component';
import { HealthCardComponent } from './modules/admin/admin/health-card/health-card.component';
import { ProfileComponent } from './modules/admin/admin/profile/profile.component';
import { SettingsComponent } from './modules/admin/admin/settings/settings.component';
import { TreatmentsComponent } from './modules/admin/admin/treatments/treatments.component';
import { PaymentsComponent } from './modules/admin/admin/payments/payments.component';
import { ChatComponent } from './modules/admin/admin/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home: Find your medical assitance' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: { title: 'Sign up: Register/Sign up' }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'Forgot password' }
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
    data: { title: 'How it works' }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { title: 'About Us' }
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
    data: { title: 'Search Results' }
  },
  {
    path: 'legal',
    component: LegalComponent,
    data: { title: 'Legal: ' },
    children: [
      {
        path: '',
        component: LegalComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        data: { title: 'Privacy Policy' }
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent,
        data: { title: 'Terms and Conditions' }
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    data: { title: 'Admin: ', canActivate: [AuthGuard] },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Profile' }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: { title: 'Settings' }
      },
      {
        path: 'health-card',
        component: HealthCardComponent,
        data: { title: 'Health Card' }
      },
      {
        path: 'treatments',
        component: TreatmentsComponent,
        data: { title: 'Treatments' }
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        data: { title: 'Payments' }
      },
      {
        path: 'chat',
        component: ChatComponent,
        data: { title: 'Chat' }
      }
    ]
  },
  {
    path: 'public-profile',
    component: PublicProfileComponent,
    data: { title: 'Public Profile' }
  },
  {
    path: '404',
    component: ErrorPageComponent,
    data: { title: 'Page Not Found' }
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
