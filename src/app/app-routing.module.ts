import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Public pages
import { HomeComponent } from './modules/public/home/home.component';
import { LoginComponent } from './modules/public/login/login.component';
import { SignUpComponent } from './modules/public/sign-up/sign-up.component';
import { HowItWorksComponent } from './modules/public/how-it-works/how-it-works.component';
import { AboutUsComponent } from './modules/public/about-us/about-us.component';
import { SearchResultsComponent } from './modules/public/search-results/search-results.component';
import { PrivacyPolicyComponent } from './modules/public/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './modules/public/terms-and-conditions/terms-and-conditions.component';
import { CountdownTimerComponent } from './modules/public/countdown-timer/countdown-timer.component';
import { ErrorPageComponent } from './modules/public/error-page/error-page.component';

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
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
