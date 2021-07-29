import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/services/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
	selector: 'app-show-review',
	templateUrl: './show-review.component.html',
	styleUrls: ['./show-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewComponent implements OnInit {
	constructor(private reviewService: ReviewService, private storageService: StorageService) {}
	@Input() review: Review | undefined;
	public uid: string;

	public onDelete(id: string): void {
		console.log('Deleting', id);
		this.reviewService.deleteReview(id).subscribe();
	}

	ngOnInit() {
		this.uid = this.storageService.get('authdata').uid;
	}
}
