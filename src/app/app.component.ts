import { Component, OnInit } from '@angular/core';
import { Show } from 'src/services/show.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	shows: Array<Show> = [
		new Show({
			title: 'First show',
			avgRating: 4.2,
			imageUrl: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
		}),
		new Show({
			title: 'Second show',
			avgRating: 3.6,
			imageUrl: 'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
		}),
		new Show({
			title: 'Third show',
			avgRating: 4.8,
			imageUrl:
				'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg',
		}),
	];

	ngOnInit() {
		console.log('From home:');
		console.log(this.shows);
	}
}
