import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review.model';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-show-details-card',
	templateUrl: './show-details-card.component.html',
	styleUrls: ['./show-details-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsCardComponent {
	@Input() show: Show;
	@Input() reviews: Array<Review>;
}
