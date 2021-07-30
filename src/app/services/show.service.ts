import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShow } from 'src/app/interfaces/show.interface';
import { Show } from './show.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	constructor(private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IShow> }>('https://tv-shows.infinum.academy/shows').pipe(
			map((response) => {
				return response.shows.map((show: IShow) => new Show(show));
			})
		);
	}

	public topRated(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IShow> }>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
			map((response) => {
				return response.shows.map((show: IShow) => new Show(show));
			})
		);
	}

	public getShowById(id: string): Observable<Show> {
		return this.http
			.get<{ show: Show }>('https://tv-shows.infinum.academy/shows/' + id)
			.pipe(map((response) => response.show));
	}
}
