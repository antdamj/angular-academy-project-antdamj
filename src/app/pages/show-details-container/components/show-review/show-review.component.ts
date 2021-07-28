import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
	selector: 'app-show-review',
	templateUrl: './show-review.component.html',
	styleUrls: ['./show-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewComponent {
	constructor(private reviewService: ReviewService) {}
	@Input() review: Review | undefined;

	public onDelete(id: string): void {
		console.log('Deleting', id);
		this.reviewService.deleteReview(id).subscribe();
	}

	public onEdit(id: string): void {
		console.log('Editing', id);
	}
}
