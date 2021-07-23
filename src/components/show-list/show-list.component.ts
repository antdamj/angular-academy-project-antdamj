import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review.model';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-show-list',
	templateUrl: './show-list.component.html',
	styleUrls: ['./show-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListComponent {
	@Input() shows: Array<Show>;
}
