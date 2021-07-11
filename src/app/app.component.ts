import { Component } from '@angular/core';
import { Show } from 'src/services/show.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	shows: Array<Show> = [
		new Show({
			title: 'First show',
			avgRating: 4.2,
			imageUrl: 'link',
		}),
		new Show({
			title: 'Second show',
			avgRating: 3.6,
			imageUrl: 'link',
		}),
		new Show({
			title: 'Third show',
			avgRating: 4.8,
			imageUrl: 'link',
		}),
	];
}
