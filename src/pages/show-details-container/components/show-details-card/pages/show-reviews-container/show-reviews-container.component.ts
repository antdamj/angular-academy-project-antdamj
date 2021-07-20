import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/services/review.model';

@Component({
	selector: 'app-show-reviews-container',
	templateUrl: './show-reviews-container.component.html',
	styleUrls: ['./show-reviews-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewsContainerComponent {
	@Input() reviews: Array<Review> | undefined;
}
