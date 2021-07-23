import { IReview } from 'src/app/interfaces/review.interface';

export class Review {
	rating: number;
	comment: string;
	id: string;
	show_id: string;

	constructor(reviewData: IReview) {
		this.rating = reviewData.rating;
		this.comment = reviewData.comment;
	}
}

// razdvojit reviewe u service pa da imaš nešto a la relacijske tablice
