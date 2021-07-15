import { Injectable } from '@angular/core';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	rawData: Array<any> = [
		{
			title: 'First show',
			averageRating: 4.2,
			imageUrl: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
			description: 'Ovo je za prvu',
		},
		{
			title: 'Second show',
			averageRating: 3.6,
			imageUrl: 'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
			description: 'Druga',
		},
		{
			title: 'Third show',
			averageRating: 4.8,
			imageUrl:
				'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg',
			description: 'Treci show',
		},
	];

	public get shows(): Array<Show> {
		return this.rawData.map((s) => new Show(s));
	}

	public get topRated(): Array<Show> {
		let s = this.shows;
		return s.filter((show) => show.averageRating >= 4.0);
	}
}
