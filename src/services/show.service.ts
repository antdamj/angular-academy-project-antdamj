import { Injectable } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { IShow } from 'src/interfaces/show.interface';
import { Show } from './show.model';
import { delay, filter, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	rawData: Array<IShow> = [
		{
			title: 'First show',
			id: '1',
			image_url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
			description: 'Ovo je za prvu',
			reviews: [
				{
					rating: 5,
					comment: 'Best show ever!!!!',
				},
				{
					rating: 4.8,
					comment: 'Very good! Great plot.',
				},
				{
					rating: 3.5,
					comment: 'Could be better',
				},
			],
		},
		{
			title: 'Second show',
			id: '2',
			image_url: 'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
			description: 'Druga',
			reviews: [
				{
					rating: 3.8,
					comment: 'It was fine.',
				},
			],
		},
		{
			title: 'Third show',
			id: '3',
			image_url:
				'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg',
			description: 'Treci show',
		},
	];

	public get shows(): Observable<Array<Show>> {
		return of(this.rawData.map((s) => new Show(s))).pipe(delay(1000 + Math.random() * 1000));
	}

	public get topRated(): Observable<Array<Show>> {
		// question
		return this.shows.pipe(map((shows) => shows.filter((show) => show.average_rating > 4.0)));
	}

	public getshowById(id: String): Observable<Show | undefined> {
		// question
		return this.shows.pipe(map((shows) => shows.find((show) => show.id === id)));
	}
}
