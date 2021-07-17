import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ILink } from 'src/interfaces/link.interface';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	links: Array<ILink> = [
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
