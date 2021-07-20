import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/services/review.model';

@Component({
	selector: 'app-show-review',
	templateUrl: './show-review.component.html',
	styleUrls: ['./show-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewComponent {
	@Input() review: Review | undefined;
}
