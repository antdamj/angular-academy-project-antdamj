import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IReview } from 'src/app/interfaces/review.interface';
import { IAddForm } from '../pages/add-review-container/components/add-review/add-review.component';
import { Review } from './review.model';

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
}
