import { Injectable } from '@angular/core';
import { IShow } from 'src/interfaces/show.interface';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	rawData: Array<IShow> = [
		{
			title: 'First show',
			id: '1',
			average_rating: 4.2,
			image_url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
			description: 'Ovo je za prvu',
		},
		{
			title: 'Second show',
			id: '2',
			average_rating: 3.6,
			image_url: 'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
			description: 'Druga',
		},
		{
			title: 'Third show',
			id: '3',
			average_rating: 4.8,
			image_url:
				'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg',
			description: 'Treci show',
		},
	];

	public get shows(): Array<Show> {
		return this.rawData.map((s) => new Show(s));
	}

	public get topRated(): Array<Show> {
		return this.shows.filter((show: Show) => show.averageRating >= 4.0);
	}

	public getshowById(id: String): Show | undefined {
		return this.shows.find((show: Show) => show.id === id);
	}
}
