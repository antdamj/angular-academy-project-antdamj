import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from 'src/app/services/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

interface ITemplate {
	show: Show | undefined;
	reviews: Array<Review>;
}

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent implements OnInit {
	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewService) {}

	public templateData$: Observable<ITemplate>;

	ngOnInit(): void {
		const id: string | null = this.route.snapshot.paramMap.get('id');
		console.log('Data id is', id);

		if (id) {
			this.templateData$ = combineLatest([
				this.showService.getShowById(id),
				this.reviewService.getReviewsForShow(id),
			]).pipe(
				map(([show, reviews]) => {
					return {
						show,
						reviews,
					};
				})
			);
		}
	}
}
