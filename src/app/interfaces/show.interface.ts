import { Review } from 'src/app/services/review.model';

export interface IShow {
	title: string;
	id: string;
	image_url: string;
	description: string;
	average_rating: number;
}
