// https://stackblitz.com/edit/angular-star-rating-input?file=src%2Fapp%2Frating-input.component.css

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-star-input',
	templateUrl: './star-input.component.html',
	styleUrls: ['./star-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarInputComponent {
	public stars: boolean[] = [true, true, true, false, false]; // default rating to 3
	public rate(rating: number) {
		this.stars = this.stars.map((_, i) => rating > i);
		console.log(rating);
	}
}
