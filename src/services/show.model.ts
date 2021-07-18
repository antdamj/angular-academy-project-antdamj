import { IShow } from 'src/interfaces/show.interface';
import { Review } from './review.model';

export class Show {
	title: string;
	averageRating: number;
	imageUrl: string;
	description: string;
	id: string;
	reviews: Array<Review> | undefined;

	constructor(showData: IShow) {
		this.title = showData.title;
		this.averageRating = showData.average_rating;
		this.imageUrl = showData.image_url;
		this.description = showData.description;
		this.id = showData.id;
		this.reviews = showData.reviews;
	}

	public get ratingPercentage(): number {
		return (100 * this.averageRating) / 5;
	}

	public calculateAverage(): number {
		return this.reviews !== undefined
			? this.reviews.map((e) => e.rating).reduce((a, b) => a + b, 0) / this.reviews.length
			: 0;
	}
}
