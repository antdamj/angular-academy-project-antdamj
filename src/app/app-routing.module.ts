import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShowsContainerComponent } from 'src/pages/all-shows-container/all-shows-container.component';
import { MainLayoutComponent } from 'src/components/main-layout/main-layout.component';
import { TopShowsContainerComponent } from 'src/pages/top-shows-container/top-shows-container.component';
import { ShowDetailsContainerComponent } from 'src/pages/show-details-container/show-details-container.component';
import { AuthenticationLayoutComponent } from 'src/components/authentication-layout/authentication-layout.component';
import { LoginContainerComponent } from 'src/pages/login-container/login-container.component';
import { RegisterContainerComponent } from 'src/pages/register-container/register-container.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: AllShowsContainerComponent,
			},
			{
				path: 'top-rated',
				component: TopShowsContainerComponent,
			},
			{
				path: 'show/:id',
				component: ShowDetailsContainerComponent,
			},
		],
	},
	{
		path: '',
		component: AuthenticationLayoutComponent,
		children: [
			{
				path: 'login',
				component: LoginContainerComponent,
			},
			{
				path: 'register',
				component: RegisterContainerComponent,
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
