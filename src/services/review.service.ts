import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IReview } from 'src/interfaces/review.interface';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	rawData: Array<IReview> = [
		{
			rating: 4.5,
			comment: 'It was great',
			id: '1',
			show_id: '1',
		},
		{
			rating: 4.7,
			comment: 'Awesome!',
			id: '2',
			show_id: '1',
		},
		{
			rating: 5.0,
			comment: 'Best show ever!',
			id: '3',
			show_id: '1',
		},
		{
			rating: 4.0,
			comment: 'Very good!',
			id: '4',
			show_id: '2',
		},
		{
			rating: 4.5,
			comment: 'It was great',
			id: '5',
			show_id: '2',
		},
		{
			rating: 3.6,
			comment: 'It was okay..',
			id: '6',
			show_id: '3',
		},
	];

	public getReviews(): Observable<Array<Review>> {
		return of(this.rawData);
	}

	public getReviewsByShow(show_id: string): Observable<Array<Review>> {
		return this.getReviews().pipe(map((reviews: Array<Review>) => reviews.filter((r) => r.show_id === show_id)));
	}
}
