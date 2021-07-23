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
			average_rating: 4.8,
		},
		{
			title: 'Second show',
			id: '2',
			image_url: 'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
			description: 'Druga',
			average_rating: 4.2,
		},
		{
			title: 'Third show',
			id: '3',
			image_url:
				'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg',
			description: 'Treci show',
			average_rating: 3.9,
		},
	];

	public getShows(): Observable<Array<Show>> {
		return of(this.rawData).pipe(
			delay(1000 + Math.random() * 1000),
			map((shows) => {
				// if (Math.random() < 0.5) {
				// 	throw new Error('Error!');
				// }
				return shows.map((s) => new Show(s));
			})
		);
	}

	public get topRated(): Observable<Array<Show>> {
		return this.getShows().pipe(map((shows) => shows.filter((show) => show.average_rating > 4.0)));
	}

	public getshowById(id: String): Observable<Show | undefined> {
		return this.getShows().pipe(map((shows) => shows.find((show) => show.id === id)));
	}
}
