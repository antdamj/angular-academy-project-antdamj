import { Review } from 'src/services/review.model';

export interface IShow {
	title: string;
	id: string;
	average_rating: number;
	image_url: string;
	description: string;
	reviews?: Array<Review>;
}
