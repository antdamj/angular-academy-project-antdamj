import { IShow } from 'src/interfaces/show.interface';

export class Show {
	private title: string;
	private averageRating: number;
	private imageUrl: string;
	private description: string;
	private id: string;

	constructor(showData: IShow) {
		this.title = showData.title;
		this.averageRating = showData.averageRating;
		this.imageUrl = showData.imageUrl;
		this.description = showData.description;
		this.id = showData.id;
	}

	public get ratingPercentage(): number {
		return (100 * this.averageRating) / 5;
	}

	public getavgRating(): number {
		return this.averageRating;
	}

	public getId(): string {
		return this.id;
	}
}
