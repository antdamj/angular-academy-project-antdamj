export class Show {
	title: string;
	averageRating: number;
	imageUrl: string;
	description: string;
	id: string;

	constructor(showData: any) {
		this.title = showData.title;
		this.averageRating = showData.averageRating;
		this.imageUrl = showData.imageUrl;
		this.description = showData.description;
		this.id = showData.id;
	}

	get ratingPercentage(): number {
		return (100 * this.averageRating) / 5;
	}
}
