import { IShow } from 'src/interfaces/show.interface';
import { Review } from './review.model';

export class Show {
	title: string;
	image_url: string;
	description: string;
	id: string;
	reviews: Array<Review> | undefined;

	constructor(showData: IShow) {
		this.title = showData.title;
		this.image_url = showData.image_url;
		this.description = showData.description;
		this.id = showData.id;
		this.reviews = showData.reviews;
	}

	public get ratingPercentage(): number {
		return (100 * this.calculateAverage()) / 5;
	}

	public calculateAverage(): number {
		return this.reviews !== undefined
			? parseFloat((this.reviews.map((e) => e.rating).reduce((a, b) => a + b, 0) / this.reviews.length).toFixed(2))
			: 0;
	}
}
