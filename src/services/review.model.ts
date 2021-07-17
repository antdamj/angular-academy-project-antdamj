import { IReview } from 'src/interfaces/review.interface';

export class Review {
	rating: number;
	comment: string;

	constructor(reviewData: IReview) {
		this.rating = reviewData.rating;
		this.comment = reviewData.comment;
	}
}
