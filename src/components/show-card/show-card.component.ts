import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCardComponent {
	@Input() title: string;
	@Input() avgRating: number;
	@Input() imageUrl: string;

	heyTitle() {
		console.log(this.title);
	}
}
