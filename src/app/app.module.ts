import { AccountInterceptor } from './components/account/account.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';







import { ImageCropperModule } from 'ngx-image-cropper';
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { NgxChartsModule } from '@swimlane/ngx-charts';




import { LoginComponent } from './views/login/login.component';
import { ResetComponent } from './views/reset/reset.component';
import { LogoutComponent } from './views/logout/logout.component';

import { AuthComponent } from './components/account/auth/auth.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { RequestResetPasswordComponent } from './components/account/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './components/account/reset-password/reset-password.component';
import { CreateAccountBoxComponent } from './components/account/create-account-box/create-account-box.component';
import { AppLayoutComponent } from './template/app-layout/app-layout.component';
import { AppLayoutHeaderComponent } from './template/app-layout/app-layout-header/app-layout-header.component';
import { AppLayoutSidenavComponent } from './template/app-layout/app-layout-sidenav/app-layout-sidenav.component';
import { AppLayoutNavComponent } from './template/app-layout/app-layout-nav/app-layout-nav.component';
import { FeedComponent } from './views/feed/feed.component';
import { GlobalComponent } from './views/global/global.component';
import { ShopComponent } from './views/shop/shop.component';
import { AppLayoutNewsComponent } from './template/app-layout/app-layout-news/app-layout-news.component';
import { ConfirmComponent } from './views/confirm/confirm.component';
import { ConfirmEmailComponent } from './components/account/confirm-email/confirm-email.component';
import { RequestResetPasswordBoxComponent } from './components/account/request-reset-password-box/request-reset-password-box.component';
import { WatchComponent } from './views/watch/watch.component';
import { CreatePostBoxComponent } from './components/post/create-post-box/create-post-box.component';
import { DeleteItemPostBoxComponent } from './components/post/delete-item-post-box/delete-item-post-box.component';
import { InsertImagePostBoxComponent } from './components/post/insert-image-post-box/insert-image-post-box.component';
import { InsertVideoPostBoxComponent } from './components/post/insert-video-post-box/insert-video-post-box.component';
import { ViewPostComponent } from './components/post/view-post/view-post.component';
import { ViewPostBoxComponent } from './components/post/view-post-box/view-post-box.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SettingsGeneralComponent } from './views/settings/settings-general/settings-general.component';
import { SettingsPrivacyComponent } from './views/settings/settings-privacy/settings-privacy.component';
import { SettingsSecureComponent } from './views/settings/settings-secure/settings-secure.component';
import { MessageBoxComponent } from './components/message/message-box/message-box.component';
import { NotifyBoxComponent } from './components/notify/notify-box/notify-box.component';
import { FollowBoxComponent } from './components/profile/follow-box/follow-box.component';
import { FollowingBoxComponent } from './components/profile/following-box/following-box.component';
import { SettingsProfileComponent } from './views/settings/settings-profile/settings-profile.component';
import { CommentPostBoxComponent } from './components/post/comment-post-box/comment-post-box.component';
import { ViewShopPostComponent } from './components/post/view-shop-post/view-shop-post.component';
import { QuestionPostBoxComponent } from './components/post/question-post-box/question-post-box.component';
import { ViewShopPostBoxComponent } from './components/post/view-shop-post-box/view-shop-post-box.component';
import { ViewWatchBoxComponent } from './components/post/view-watch-box/view-watch-box.component';
import { WatchersBoxComponent } from './components/beautv/watchers-box/watchers-box.component';
import { CreateShopPostBoxComponent } from './components/post/create-shop-post-box/create-shop-post-box.component';
import { CartComponent } from './views/cart/cart.component';
import { ShopRequestComponent } from './views/shop/shop-request/shop-request.component';
import { ShopDashboardComponent } from './views/shop/shop-dashboard/shop-dashboard.component';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { LikesButtonComponent } from './components/post/likes-button/likes-button.component';
import { LikedDirective } from './directives/liked.directive';
import { CommentsButtonComponent } from './components/post/comments-button/comments-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    CreateAccountComponent,
    RequestResetPasswordComponent,
    ResetComponent,
    ResetPasswordComponent,
    LogoutComponent,
    CreateAccountBoxComponent,
    AppLayoutComponent,
    AppLayoutHeaderComponent,
    AppLayoutSidenavComponent,
    AppLayoutNavComponent,
    FeedComponent,
    GlobalComponent,
    ShopComponent,
    AppLayoutNewsComponent,
    ConfirmComponent,
    ConfirmEmailComponent,
    RequestResetPasswordBoxComponent,
    WatchComponent,
    CreatePostBoxComponent,
    DeleteItemPostBoxComponent,
    InsertImagePostBoxComponent,
    InsertVideoPostBoxComponent,
    ViewPostComponent,
    ViewPostBoxComponent,
    ProfileComponent,
    SettingsComponent,
    SettingsGeneralComponent,
    SettingsPrivacyComponent,
    SettingsSecureComponent,
    MessageBoxComponent,
    NotifyBoxComponent,
    FollowBoxComponent,
    FollowingBoxComponent,
    SettingsProfileComponent,
    CommentPostBoxComponent,
    ViewShopPostComponent,
    QuestionPostBoxComponent,
    ViewShopPostBoxComponent,
    ViewWatchBoxComponent,
    WatchersBoxComponent,
    CreateShopPostBoxComponent,
    CartComponent,
    ShopRequestComponent,
    ShopDashboardComponent,
    DeliveryComponent,
    LikesButtonComponent,
    LikedDirective,
    CommentsButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    FontAwesomeModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    ImageCropperModule,
    MatChipsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
    GalleryModule,
    LightboxModule,
    MatBadgeModule,
    NgxEmojiPickerModule,
    MatTabsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatStepperModule,
    NgxChartsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccountInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
