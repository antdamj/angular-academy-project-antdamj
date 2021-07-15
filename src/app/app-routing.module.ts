import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShowsContainerComponent } from 'src/components/all-shows-container/all-shows-container.component';
import { MainLayoutComponent } from 'src/components/main-layout/main-layout.component';
import { SidenavComponent } from 'src/components/sidenav/sidenav.component';
import { TopShowsContainerComponent } from 'src/components/top-shows-container/top-shows-container.component';

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
				path: 'sidenav',
				component: SidenavComponent,
			},
			{
				path: 'top-rated',
				component: TopShowsContainerComponent,
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
