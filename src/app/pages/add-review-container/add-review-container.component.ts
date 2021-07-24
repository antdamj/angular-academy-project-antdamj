import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { IAddForm } from './components/add-review/add-review.component';

@Component({
	selector: 'app-add-review-container',
	templateUrl: './add-review-container.component.html',
	styleUrls: ['./add-review-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReviewContainerComponent {
	@Input() showId: string;

	constructor(private reviewService: ReviewService) {}

	public addFormData(data: IAddForm) {
		this.reviewService.addReview(data).subscribe();
	}
}
