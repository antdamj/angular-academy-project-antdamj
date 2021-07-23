import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/services/review.model';

@Component({
	selector: 'app-show-review-list',
	templateUrl: './show-review-list.component.html',
	styleUrls: ['./show-review-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewListComponent {
	@Input() reviews: Array<Review>;
}
