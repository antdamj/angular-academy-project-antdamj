import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from './review.model';

interface IAddForm {
	comment: string;
	rating: number;
	show_id: number;
}

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	constructor(private http: HttpClient) {}

	public getReviewsForShow(showId: string): Observable<Array<Review>> {
		return this.http
			.get<{ reviews: Array<Review> }>('https://tv-shows.infinum.academy/shows/' + showId + '/reviews')
			.pipe(map((response) => response.reviews));
	}

	public addReview(data: IAddForm): Observable<any> {
		return this.http.post<any>('https://tv-shows.infinum.academy/reviews', data, { observe: 'response' });
	}

	public deleteReview(reviewId: string): Observable<any> {
		return this.http.delete('https://tv-shows.infinum.academy/reviews/' + reviewId, { observe: 'response' });
	}
}
