import { DeliveryComponent } from './views/delivery/delivery.component';
import { ShopDashboardComponent } from './views/shop/shop-dashboard/shop-dashboard.component';
import { ShopRequestComponent } from './views/shop/shop-request/shop-request.component';
import { CartComponent } from './views/cart/cart.component';
import { SettingsProfileComponent } from './views/settings/settings-profile/settings-profile.component';
import { SettingsComponent } from './views/settings/settings.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WatchComponent } from './views/watch/watch.component';
import { ConfirmComponent } from './views/confirm/confirm.component';
import { ShopComponent } from './views/shop/shop.component';
import { GlobalComponent } from './views/global/global.component';
import { AppLayoutComponent } from './template/app-layout/app-layout.component';
import { FeedComponent } from './views/feed/feed.component';
import { LogoutComponent } from './views/logout/logout.component';
import { ResetComponent } from './views/reset/reset.component';
import { AccountGuard } from './components/account/account.guard';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feed',
    component: AppLayoutComponent,
    data: [
      { destack: true }
    ],
    children: [
      { path: '', component: FeedComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'global',
    component: AppLayoutComponent,
    data: [
      { destack: true }
    ],
    children: [
      { path: '', component: GlobalComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'shop',
    component: AppLayoutComponent,
    data: [
      { destack: true }
    ],
    children: [
      { path: '', component: ShopComponent },
      { path: ':alias', component: ShopComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'cart',
    component: AppLayoutComponent,
    data: [
      { destack: false }
    ],
    children: [
      { path: '', component: CartComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'delivery',
    component: AppLayoutComponent,
    data: [
      { destack: false }
    ],
    children: [
      { path: '', component: DeliveryComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'dashboard',
    component: AppLayoutComponent,
    data: [
      { destack: false }
    ],
    children: [
      { path: '', component: ShopDashboardComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'request',
    component: AppLayoutComponent,
    data: [
      { destack: false }
    ],
    children: [
      { path: '', component: ShopRequestComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'watch',
    component: AppLayoutComponent,
    data: [
      { destack: true }
    ],
    children: [
      { path: '', component: WatchComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'profile',
    component: AppLayoutComponent,
    data: [
      { destack: false }
    ],
    children: [
      { path: '', component: ProfileComponent },
      { path: ':alias', component: ProfileComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'settings',
    component: AppLayoutComponent,
    data: [
      { destack: false }
    ],
    children: [
      { 
        path: '',
        component: SettingsComponent,
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: SettingsProfileComponent },
        ]
      },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'confirm/account',
    children: [
      { path: '', component: ConfirmComponent },
      { path: ':token', component: ConfirmComponent }
    ]
  },
  {
    path: 'reset/password',
    children: [
      { path: '', component: ResetComponent },
      { path: ':token', component: ResetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
