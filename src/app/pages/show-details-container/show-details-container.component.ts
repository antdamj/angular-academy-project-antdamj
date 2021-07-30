import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Review } from 'src/app/services/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';
import { IAddForm } from './components/add-review/add-review.component';

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
	constructor(
		private route: ActivatedRoute,
		private showService: ShowService,
		private reviewService: ReviewService,
		private router: Router
	) {}

	public templateData$: Observable<ITemplate | null>;
	public trigger$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

	public onSendData(data: IAddForm): void {
		const id: string | null = this.route.snapshot.paramMap.get('id');

		this.reviewService.addReview(data).subscribe();

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

		this.router.navigate(['/show/' + id]);
	}

	ngOnInit(): void {
		const id: string | null = this.route.snapshot.paramMap.get('id');
		const id$: Observable<string | null> = of(id);
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
