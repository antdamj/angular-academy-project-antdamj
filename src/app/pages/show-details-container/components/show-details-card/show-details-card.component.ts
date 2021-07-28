import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/services/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { Show } from 'src/app/services/show.model';
import { IAddForm } from '../add-review/add-review.component';

@Component({
	selector: 'app-show-details-card',
	templateUrl: './show-details-card.component.html',
	styleUrls: ['./show-details-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsCardComponent {
	constructor(private reviewService: ReviewService) {}

	@Input() show: Show;
	@Input() reviews: Array<Review>;
	@Output() sendData: EventEmitter<IAddForm> = new EventEmitter();

	public addFormData(data: IAddForm) {
		console.log('>>>', data);
		this.sendData.emit(data);
	}
}
