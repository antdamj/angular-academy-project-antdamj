import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MainLayoutComponent } from 'src/components/main-layout/main-layout.component';
import { SidenavComponent } from 'src/components/sidenav/sidenav.component';
import { AllShowsContainerComponent } from 'src/pages/all-shows-container/all-shows-container.component';
import { ShowListComponent } from 'src/components/show-list/show-list.component';
import { ShowCardComponent } from 'src/components/show-card/show-card.component';
import { RatingComponent } from 'src/components/rating/rating.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowDetailsCardComponent } from 'src/pages/show-details-container/components/show-details-card/show-details-card.component';
import { ShowDetailsContainerComponent } from 'src/pages/show-details-container/show-details-container.component';
import { TopShowsContainerComponent } from 'src/pages/top-shows-container/top-shows-container.component';
import { ShowReviewComponent } from 'src/pages/show-details-container/components/show-details-card/components/show-review/show-review.component';
import { ShowReviewsContainerComponent } from 'src/pages/show-details-container/components/show-details-card/pages/show-reviews-container/show-reviews-container.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { AuthenticationLayoutComponent } from 'src/components/authentication-layout/authentication-layout.component';

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
		ShowReviewsContainerComponent,
		ShowReviewComponent,
		LoginComponent,
		RegisterComponent,
		AuthenticationLayoutComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		AppRoutingModule,
		MatProgressSpinnerModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
