import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/services/show.model';
import { ShowService } from 'src/services/show.service';

@Component({
	selector: 'app-top-shows-container',
	templateUrl: './top-shows-container.component.html',
	styleUrls: ['./top-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopShowsContainerComponent implements OnInit {
	public shows: Array<Show>;

	constructor(private showService: ShowService) {}

	ngOnInit(): void {
		this.shows = this.showService.topRated;
	}
}
