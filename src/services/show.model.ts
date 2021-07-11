export class Show {
	title: string;
	avgRating: number;
	imageUrl: string;

	constructor(showData: any) {
		this.title = showData.title;
		this.avgRating = showData.avg;
		this.imageUrl = showData.imgurl;
	}
}
