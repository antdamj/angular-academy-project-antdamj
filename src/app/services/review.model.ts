import { IReview } from 'src/app/interfaces/review.interface';

export interface User {
	id: string;
	email: string;
	image_url: string | null;
}

export class Review {
	rating: number;
	comment: string;
	id: string;
	show_id: string;
	user: User;

	constructor(reviewData: IReview) {
		this.rating = reviewData.rating;
		this.comment = reviewData.comment;
	}
}

// razdvojit reviewe u service pa da imaš nešto a la relacijske tablice
