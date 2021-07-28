import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MainLayoutComponent } from 'src/app/components/main-layout/main-layout.component';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';
import { AllShowsContainerComponent } from 'src/app/pages/all-shows-container/all-shows-container.component';
import { ShowListComponent } from 'src/app/components/show-list/show-list.component';
import { ShowCardComponent } from 'src/app/components/show-card/show-card.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { AppRoutingModule } from './app-routing.module';
import { TopShowsContainerComponent } from 'src/app/pages/top-shows-container/top-shows-container.component';
import { ShowReviewComponent } from 'src/app/pages/show-details-container/components/show-review/show-review.component';
import { AuthenticationLayoutComponent } from 'src/app/components/authentication-layout/authentication-layout.component';
import { LoginComponent } from 'src/app/pages/login-container/components/login/login.component';
import { RegisterComponent } from 'src/app/pages/register-container/components/register/register.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegisterContainerComponent } from './pages/register-container/register-container.component';
import { ShowReviewListComponent } from './pages/show-details-container/components/show-review-list/show-review-list.component';
import { ShowDetailsCardComponent } from './pages/show-details-container/components/show-details-card/show-details-card.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AddReviewComponent } from './pages/show-details-container/components/add-review/add-review.component';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		SidenavComponent,
		AllShowsContainerComponent,
		ShowListComponent,
		ShowCardComponent,
		RatingComponent,
		ShowListComponent,
		TopShowsContainerComponent,
		ShowDetailsContainerComponent,
		ShowDetailsCardComponent,
		ShowReviewComponent,
		LoginComponent,
		RegisterComponent,
		AuthenticationLayoutComponent,
		LoginContainerComponent,
		RegisterContainerComponent,
		ShowReviewListComponent,
		ShowReviewComponent,
		AddReviewComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		AppRoutingModule,
		MatProgressSpinnerModule,
		MatInputModule,
		ReactiveFormsModule,
		MatButtonModule,
		HttpClientModule,
		MatProgressBarModule,
		MatSnackBarModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
