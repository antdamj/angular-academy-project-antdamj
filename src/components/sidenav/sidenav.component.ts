import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	links: Array<any> = [
		{
			url: '',
			title: 'All shows',
		},
		{
			url: 'top-rated',
			title: 'Top rated',
		},
	];
}
